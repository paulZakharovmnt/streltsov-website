import React, { useState } from "react";
import "./Home.css";
import image from "../../img/333.jpg";
import image1 from "../../img/Products/DSC09312.jpg";
import image2 from "../../img/Products/DSC01185.jpg";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import imageAboutBig from "../../img/DSC01463.jpg";
import FeaturedProducts from "./FeaturedProducts";

const Home = () => {
  const [showingImageId, setShowigImageId] = useState(0);
  const images = [image, image1, image2];

  const showPrevImage = () => {
    if (showingImageId === 0) {
      setShowigImageId(images.length - 1);
      return;
    }
    setShowigImageId(showingImageId - 1);
  };

  const showNextImage = () => {
    if (showingImageId === images.length - 1) {
      setShowigImageId(0);
      return;
    }
    setShowigImageId(showingImageId + 1);
  };

  setTimeout(() => {
    showNextImage();
    return () => clearTimeout(showNextImage());
  }, 7000);

  return (
    <div className="homepage">
      <div className="homepage-image-slider">
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={showingImageId}
            timeout={1000}
            addEndListener={(node, done) =>
              node.addEventListener("transitionend", done, false)
            }
            classNames="fade"
          >
            <img src={images[showingImageId]} alt="" />
          </CSSTransition>
        </SwitchTransition>

        {/* <div className="homepage-logo"></div> */}
        {/* <LeftArrow showPrevImage={showPrevImage} />
        <RightArrow showNextImage={showNextImage} /> */}
      </div>
      {/* <div className="homepage-featured">Features</div> */}
      <FeaturedProducts />
      <div className="homepage-about">
        <div className="homepage-about-images">
          <img
            className="homepage-about-big-image"
            src={imageAboutBig}
            alt=""
          />
        </div>
        <div className="homepage-about-text">
          <h1>Dmitry Streltsov</h1>
          <p>
            Author and manufacturer of unique accessories made of titanium.
            Having relied on the original design and the utmost reliability of
            the structure, Dmitry Streltsov formed an audience that preferred
            high-quality and reliable products to the rest of the market. This
            was facilitated by the overall concept of the brand - tactical
            characteristics in a respectable form, a vivid image behind each
            model.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
