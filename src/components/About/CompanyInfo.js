import React from "react";

const CompanyInfo = () => {
  return (
    <div className="company-info-container">
      <div className="about-container">
        <p>
          We produce unique accessories from titanium: pens, pencils, bracelets,
          bushites for knives and much more. Over the 10-year history of the
          brand, we have learned to make real works of art out of metal.
        </p>
        <h4>All our products have a lifetime warranty.</h4>
        <p>
          Our production is located in the very heart of Russia – in the Urals,
          the titanium capital of the world and has absorbed the knowledge,
          experience, and character of our land. Beautiful, unique products will
          be the perfect gift for family, colleagues and loved ones, and will
          also be a worthy addition to your collection.
        </p>
        <p>
          All ordered products will be sent to you free of charge anywhere in
          the world.
        </p>
      </div>
      <div className="shipping-container">
        <h4>Purchase terms:</h4>
        <ul>
          <li>Free shipping;</li>
          <li>Payment (outside of Russia): Paypal;</li>
          <li>
            Payment (in Russia): Paypal, credit cards, bank transfer, cash to
            the courier (Moscow, Yekaterinburg, St. Petersburg).
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CompanyInfo;
