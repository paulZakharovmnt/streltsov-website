import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { productsByIdTEST } from "../core/TestProducts";
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart } from "../redux/actions/actions";
import classNames from "classnames";
import image1 from "../img/Products/DSC01036.jpg";
import image2 from "../img/Products/DSC09187.jpg";
import image3 from "../img/Products/IMG_4666.jpg";
import ProductImagesModal from "./ProductImagesModal";
import "./ProductInfoPage.css";
import Button from "./Button/Button";
import PopupMessage from "./AdditionalComponents/PopupMessage";
import LeftArrow from "./AdditionalComponents/ImageNavArrows/LeftArrow";
import RightArrow from "./AdditionalComponents/ImageNavArrows/RightArrow";
import GoBackBTN from "./AdditionalComponents/GoBackBTN";
import { useSwipeable } from "react-swipeable";

const ProductInfoPage = () => {
  const { productId, childLink } = useParams();
  const [productIsInCart, setProductIsInCart] = useState(false);
  const [showPopUpMessage, setShowPopUpMessage] = useState(false);
  const [listOfImages, setListOfImages] = useState([image1, image2, image3]);
  const [showingImageId, setShowingImageId] = useState(0);
  const [showProductPhotosModal, setShowProductPhotosModal] = useState(false);
  const [selectedProductInfo, setSelectedProductInfo] = useState("Description");

  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.cartReducer);
  const productsAllIdsInCart = useSelector(
    (state) => state.productsAllIdsInCartReducer
  );

  const currentProduct = productsByIdTEST[productId];

  const productTabs = ["Description", "TTX", "Delivery"];

  useEffect(() => {
    if (productsAllIdsInCart.includes(productId)) {
      setProductIsInCart(true);
    }
  }, []);

  useEffect(() => {
    if (showPopUpMessage) {
      setTimeout(() => {
        setShowPopUpMessage(false);
      }, 4000);

      return () => {
        setShowPopUpMessage(false);
      };
    }
  }, [showPopUpMessage]);

  const showNextImage = () => {
    if (showingImageId === listOfImages.length - 1) {
      setShowingImageId(0);
      return;
    }
    setShowingImageId(showingImageId + 1);
  };

  const showPrevImage = () => {
    if (showingImageId === 0) {
      setShowingImageId(listOfImages.length - 1);
      return;
    }
    setShowingImageId(showingImageId - 1);
  };

  const handleAddProductToCartClick = () => {
    if (productIsInCart) {
      return;
    }

    const productInfoForCart = {
      name: currentProduct.name,
      price: currentProduct.price,
      description: currentProduct.description,
      quontity: 1,
    };
    dispatch(addProductToCart(productInfoForCart));
    setProductIsInCart(true);
    setShowPopUpMessage(true);
  };

  // const tabBtnClasses = classNames('product-info-btn', {
  //   openedTab:
  // })

  const swipeImageHandlers = useSwipeable({
    onSwipedRight: () => showPrevImage(),
    onSwipedLeft: () => showNextImage(),
  });
  const myRef = useRef();
  const refPassthrough = (el) => {
    // call useSwipeable ref prop with el
    swipeImageHandlers.ref(el);

    // set myRef el so you can access it yourself
    myRef.current = el;
  };

  return (
    <div className="product-page">
      <div className="back-to-products-button-container">
        <GoBackBTN
          whereToLink={`/products/${childLink}`}
          linkName="Back to List"
        />
      </div>

      <div className="product-info-page-container">
        {showPopUpMessage && (
          <div className="product-in-cart-message">
            <PopupMessage currentProduct={currentProduct} />
          </div>
        )}

        <div className="product-info-page-left">
          <div className="product-images-container">
            <LeftArrow showPrevImage={showPrevImage} />
            <div
              className="product-image"
              {...swipeImageHandlers}
              ref={refPassthrough}
            >
              <img
                src={listOfImages[showingImageId]}
                alt=""
                onClick={() => setShowProductPhotosModal(true)}
              />
            </div>

            <RightArrow showNextImage={showNextImage} />
          </div>
          <div className="image-counter-container">
            {listOfImages.map((image, id) => (
              <i
                key={id}
                // className={
                //   showingImageId === id
                //     ? "selected-dot fas fa-circle"
                //     : "fas fa-circle"
                // }
                className={showingImageId === id ? "selected-dot dot" : "dot"}
              />
            ))}
          </div>
        </div>

        <div className="product-general-info">
          <div className="product-price-and-name-container">
            <h2>{currentProduct.name}</h2>
            <h2>${currentProduct.price}</h2>
          </div>

          <div className="product-info">
            <div className="product-info-selector">
              {productTabs.map((tab) => (
                <div
                  className={
                    tab === selectedProductInfo
                      ? "product-info-btn openedTab"
                      : "product-info-btn"
                  }
                  key={tab}
                  onClick={() => setSelectedProductInfo(tab)}
                >
                  {tab}
                </div>
              ))}
            </div>

            <div className="product-description"> INFO </div>
          </div>
          <div className="product-links">
            <h5>MAY BE LINK FOR COLLECTION</h5>
            <div onClick={handleAddProductToCartClick}>
              <Button
                productIsInCart={productIsInCart}
                productsInCart={productsInCart}
                productId={productId}
              />
            </div>
          </div>
        </div>
        {showProductPhotosModal && (
          <ProductImagesModal
            listOfImages={listOfImages}
            showingImageId={showingImageId}
            setShowProductPhotosModal={setShowProductPhotosModal}
            setShowingImageId={setShowingImageId}
            showNextImage={showNextImage}
            showPrevImage={showPrevImage}
          />
        )}
      </div>
    </div>
  );
};

export default ProductInfoPage;
