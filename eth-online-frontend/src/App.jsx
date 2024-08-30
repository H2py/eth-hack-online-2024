import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="nav-bar">
        <div className="status-bar">
          <span className="time">9:41</span>
          <div className="status-icons">
            <div className="signal"></div>
            <div className="wifi"></div>
            <div className="battery"></div>
          </div>
        </div>
      </div>

      <header className="header">
        <img
          src="/images/main_logo.png"
          alt="Finance Us Illustration"
          className="illustration"
        />
      </header>

      <div className="welcome-text">
        <h2>Welcome!</h2>
      </div>

      <form className="login-form">
        <input id="email" type="email" placeholder="Email" required />
        <div className="password-container">
          <input
            id="password"
            type="password"
            placeholder="Password"
            required
          />
          <img
            src="/images/eye_invisible.svg"
            alt="toggle visibility"
            className="password-icon"
          />
        </div>
        <a href="#" className="forgot-password">
          Forgot password?
        </a>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>

      <div className="register">
        <p>
          Not a member? <a href="#">Register now</a>
        </p>
      </div>

      <hr className="divider" />

      <div className="continue-with">
        <p>Or continue with</p>
        <div className="social-icons">
          <img src="/images/x_icon.svg" alt="X icon" />
          <img src="/images/discord_icon.svg" alt="Discord icon" />
          <img src="/images/tel_icon.svg" alt="Telegram icon" />
        </div>
      </div>
    </div>
  );
}

export default App;
