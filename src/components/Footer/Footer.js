import React from "react";
import SocialMediaIcons from "../AdditionalComponents/SocialMediaIcons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <h5>(С) 2018-2020, STRELTSOV.ART</h5>
        <div className="logo"></div>
        <div className="footer-links-container">
          <SocialMediaIcons />{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
