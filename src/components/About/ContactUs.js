import React from "react";
import SocialMediaIcons from "../AdditionalComponents/SocialMediaIcons";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contacts">
      <div className="contacts-container">
        <div className="social-media">
          <h4>You need more information about us?</h4>
          <div className="icons-container">
            <div>
              <h4>Visit our instagram</h4>
              <h4>Send Email</h4>
            </div>
            <SocialMediaIcons />
          </div>
        </div>
        <div className="feedback-container">
          <h4>
            Or you can send us message directly and we will give you feedback
          </h4>
          <input className="feedback-input" placeholder="Enter your Email" />
          <textarea
            className="feedback-textarea"
            placeholder="Message or question you would like to send to us"
            name=""
            id=""
            cols="0"
            rows="10"
          ></textarea>
          <button>send message</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
