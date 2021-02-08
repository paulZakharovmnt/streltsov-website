import React from "react";
import SocialMediaIcons from "../AdditionalComponents/SocialMediaIcons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo"></div>
      <div className="footer-company-info">
        <p>Dmitri Streltsov</p>
        <p>Yekaterinburg</p>
        <p>Phone</p>
        <div className="footer-social-links">
          <SocialMediaIcons />
        </div>
      </div>
    </div>
  );
};

export default Footer;
