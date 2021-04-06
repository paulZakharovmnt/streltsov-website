import React from "react";
import "./LoginPage.css";

const LoginPage = ({ email, setEmail, password, setPassword, handleLogin }) => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login">
          <h1>LOGIN</h1>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <div className="login-btn-cont" onClick={handleLogin}>
            <p>Login</p>
            <div className="login-btn-traingle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
