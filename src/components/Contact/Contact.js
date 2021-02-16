import React from "react";
import imageContacts from "../../img/contact/contact.jpg";
import "./Contact.css";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contacts-container">
        <Fade top cascade distance={"150px"}>
          <div className="contacts-info">
            <h1>Contact</h1>
            <p> Follow us on Instagram</p>
            <p> Email us</p>
          </div>
        </Fade>
        <div className="contact-image">
          <Fade bottom distance={"150px"}>
            <img src={imageContacts} alt="" />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Contact;
