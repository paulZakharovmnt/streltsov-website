import React, { useState } from "react";
import "./BillingDetails.css";

const BillingDetails = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [optionalAddress, setOptionalAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postcode, setPostcode] = useState("");
  const [phone, setPhone] = useState("");
  const [additional, setAdditional] = useState("");
  return (
    <div className="billing-details">
      <h2>Billing details</h2>
      <input
        onChange={(event) => setName(event.target.value)}
        value={name}
        placeholder="Your name"
        required
      />
      <input
        onChange={(event) => setEmail(event.target.value)}
        value={email}
        placeholder="Email adress"
        required
      />
      <input
        onChange={(event) => setAddress(event.target.value)}
        value={address}
        placeholder="Address"
        required
      />
      <input
        onChange={(event) => setOptionalAddress(event.target.value)}
        value={optionalAddress}
        placeholder="Apartment, suit, unit, etc. (optional)"
      />
      <input
        onChange={(event) => setCity(event.target.value)}
        value={city}
        placeholder="City"
        required
      />
      <input
        onChange={(event) => setCountry(event.target.value)}
        value={country}
        placeholder="Country / Region"
        required
      />
      <input
        onChange={(event) => setPostcode(event.target.value)}
        value={postcode}
        placeholder="Postcode"
        required
      />
      <input
        onChange={(event) => setPhone(event.target.value)}
        value={phone}
        placeholder="Phone number (optional)"
        required
      />
      <textarea
        onChange={(event) => setAdditional(event.target.value)}
        value={additional}
        placeholder="Additional information about your order, e.g. - notes for delivery"
      />
    </div>
  );
};

export default BillingDetails;
