import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { productsByIdTEST } from "../core/TestProducts";
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart } from "../redux/actions/actions";
import classNames from "classnames";
import ProductImagesModal from "./ProductImagesModal";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import "./ProductInfoPage.css";
// import { useSwipeable } from "react-swipeable";
import PopupMessage from "./AdditionalComponents/PopupMessage";
import BreadCrumbs from "./AdditionalComponents/BreadCrumbs";
// import LoadingSpinner from "./AdditionalComponents/LoadingSpinner";

const ProductInfoPage = () => {
  const { productId, childLink } = useParams();
  const [productIsInCart, setProductIsInCart] = useState(false);
  const [showPopUpMessage, setShowPopUpMessage] = useState(false);
  const [showProductPhotosModal, setShowProductPhotosModal] = useState(false);

  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.cartReducer);
  const productsAllIdsInCart = useSelector(
    (state) => state.productsAllIdsInCartReducer
  );
  const productsById = useSelector((state) => state.productsByIdReducer);

  const currentProduct = productsByIdTEST[productId];
  // console.log(productId);
  // console.log(childLink);

  const breadcrumbs = useBreadcrumbs();
  console.log(breadcrumbs);

  useEffect(() => {
    if (productsAllIdsInCart.includes(productId)) {
      setProductIsInCart(true);
      return;
    }
    setProductIsInCart(false);
  }, [productsAllIdsInCart, productId]);

  // useEffect(() => {
  //   if (showPopUpMessage) {
  //     setTimeout(() => {
  //       setShowPopUpMessage(false);
  //     }, 4000);

  //     return () => {
  //       setShowPopUpMessage(false);
  //     };
  //   }
  // }, [showPopUpMessage]);

  const handleAddProductToCartClick = () => {
    if (productIsInCart) {
      return;
    }

    const productInfoForCart = {
      name: currentProduct.name,
      price: currentProduct.price,
      image: currentProduct.images[0],
      description: currentProduct.description,
      quontity: 1,
    };
    dispatch(addProductToCart(productInfoForCart));
    setProductIsInCart(true);
    setShowPopUpMessage(true);
  };

  const addToCartBtnClasses = classNames("add-to-cart-btn", {
    inCart: productIsInCart,
  });

  // const tabBtnClasses = classNames('product-info-btn', {
  //   openedTab:
  // })

  // const swipeImageHandlers = useSwipeable({
  //   onSwipedRight: () => showPrevImage(),
  //   onSwipedLeft: () => showNextImage(),
  // });
  // const myRef = useRef();
  // const refPassthrough = (el) => {
  //   // call useSwipeable ref prop with el
  //   swipeImageHandlers.ref(el);

  //   // set myRef el so you can access it yourself
  //   myRef.current = el;
  // };

  return (
    <div className="product-page">
      <div className="product-info-container">
        <div className="product-info">
          <p>{currentProduct.collection}</p>
          <h1>{currentProduct.name}</h1>
          <p>{currentProduct.description}</p>
          <p>{currentProduct.material}</p>
          <h2>{currentProduct.price} USD</h2>
          <div
            className={addToCartBtnClasses}
            onClick={handleAddProductToCartClick}
          >
            {!productIsInCart ? <p>Add to Cart</p> : <p>In Cart</p>}

            <div className="add-to-cart-traingle"></div>
          </div>
        </div>
        {showPopUpMessage && <PopupMessage />}
      </div>
      <div className="product-photo-container">
        <img
          src={currentProduct.images[0]}
          alt=""
          onClick={() => setShowProductPhotosModal(true)}
        />
      </div>
      {showProductPhotosModal && (
        <ProductImagesModal
          currentProduct={currentProduct}
          setShowProductPhotosModal={setShowProductPhotosModal}
        />
      )}
      <div className="popup-message-box">
        {/* {showPopUpMessage && <PopupMessage />} */}
      </div>
    </div>
  );
};

export default ProductInfoPage;
