import React from "react";
import LeftArrow from "./AdditionalComponents/ImageNavArrows/LeftArrow";
import RightArrow from "./AdditionalComponents/ImageNavArrows/RightArrow";
import "./ProductImagesModal.css";

const ProductImagesModal = ({
  listOfImages,
  showingImageId,
  setShowProductPhotosModal,
  setShowingImageId,
  showNextImage,
  showPrevImage,
}) => {
  return (
    <div className="black-layout">
      <div className="product-photo-container">
        <div
          className="close-modal-container"
          onClick={() => setShowProductPhotosModal(false)}
        >
          Close Modal
        </div>
        <div className="photo-container-top">
          <LeftArrow showPrevImage={showPrevImage} />
          <div className="product-photo">
            <img src={listOfImages[showingImageId]} alt="" />
            {/* {listOfImages.map((image, id) => (
              <img key={id} src={image} alt="" />
            ))} */}
          </div>

          <RightArrow showNextImage={showNextImage} />
        </div>
        <div className="photo-container-bottom">
          <div className="image-counter">
            {listOfImages.map((image, id) => (
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
    </div>
  );
};

export default ProductImagesModal;
