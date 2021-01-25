import React from "react";
import "./SocialMediaIcons.css";

const SocialMediaIcons = () => {
  return (
    <ul className="list-of-icons">
      <li>
        <a href="#">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-envelope" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  );
};

export default SocialMediaIcons;
