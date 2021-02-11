import React from "react";
import aboutImage from "../../img/about/about.jpg";
import aboutImage2 from "../../img/about/about1.jpg";
import aboutImage3 from "../../img/about/about2.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <div className="about">
          <h1>About Us</h1>
          <p>
            We produce unique accessories from titanium: pens, pencils,
            bracelets, bushites for knives and much more. Over the 10-year
            history of the brand, we have learned to make real works of art out
            of metal.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="" />
        </div>
      </div>
      <div className="about-container">
        <div className="warranty">
          All our products have a lifetime warranty.
          <div className="bottom-line"></div>
        </div>
        <div className="about-right">
          <p>
            Our production is located in the very heart of Russia – in the
            Urals, the titanium capital of the world and has absorbed the
            knowledge, experience, and character of our land. Beautiful, unique
            products will be the perfect gift for family, colleagues and loved
            ones, and will also be a worthy addition to your collection.
          </p>
          <div className="about-right-image">
            <img src={aboutImage2} alt="" />
          </div>
        </div>
        <p className="deliver">
          All ordered products will be sent to you free of charge anywhere in
          the world.
        </p>
        <div className="about-left">
          <div className="about-left-image">
            <img src={aboutImage3} alt="" />
          </div>
          <p>
            Purchase terms: Free shipping; Payment (outside of Russia): Paypal;
            Payment (in Russia): Paypal, credit cards, bank transfer, cash to
            the courier (Moscow, Yekaterinburg, St. Petersburg).
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
