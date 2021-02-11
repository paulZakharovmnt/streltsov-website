import React from "react";
import imageContacts from "../../img/contact/contact.jpg";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contacts-container">
        <div className="contacts-info">
          <h1>Contact</h1>
          <p> Follow us on Instagram</p>
          <p> Email us</p>
        </div>
        <div className="contact-image">
          <img src={imageContacts} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
