import React, { useState } from "react";
import LeftArrow from "./AdditionalComponents/ImageNavArrows/LeftArrow";
import RightArrow from "./AdditionalComponents/ImageNavArrows/RightArrow";
import "./ProductImagesModal.css";

const ProductImagesModal = ({ currentProduct, setShowProductPhotosModal }) => {
  const [showingImageId, setShowingImageId] = useState(0);

  const showNextImage = () => {
    if (showingImageId === currentProduct.images.length - 1) {
      setShowingImageId(0);
      return;
    }
    setShowingImageId(showingImageId + 1);
  };

  const showPrevImage = () => {
    if (showingImageId === 0) {
      setShowingImageId(currentProduct.images.length - 1);
      return;
    }
    setShowingImageId(showingImageId - 1);
  };

  return (
    <div className="black-layout">
      <div className="photo-container">
        <div className="close-modal-container">
          <p onClick={() => setShowProductPhotosModal(false)}>Close</p>
        </div>
        <div className="photo-container-top">
          <LeftArrow showPrevImage={showPrevImage} />
          <div className="product-photo">
            <img src={currentProduct.images[showingImageId]} alt="" />
          </div>

          <RightArrow showNextImage={showNextImage} />
        </div>

        <div className="image-counter">
          {currentProduct.images.map((image, id) => (
            <div className="small-image-preview" key={id}>
              <img
                className={
                  showingImageId === id
                    ? "small-image selected-small-image"
                    : "small-image"
                }
                src={image}
                alt=""
                onClick={() => setShowingImageId(id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImagesModal;
