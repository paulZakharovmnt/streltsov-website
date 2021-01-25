import React, { useState } from "react";
import SocialMediaIcons from "../AdditionalComponents/SocialMediaIcons";
import "./About.css";
import CompanyInfo from "./CompanyInfo";
import ContactUs from "./ContactUs";

const About = () => {
  const [contactUsModal, setContactUsModal] = useState(false);
  return (
    <div className="about-page">
      <div className="about-header">About</div>
      <div className="about-control-btns-container">
        <div onClick={() => setContactUsModal(false)}>Ifno about company</div>
        <div onClick={() => setContactUsModal(true)}>Contact us!</div>
      </div>
      <div className="about-page-container">
        {contactUsModal ? <ContactUs /> : <CompanyInfo />}
      </div>
    </div>
  );
};

export default About;
