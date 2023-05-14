import "./styles.css";
import { GoogleLogin } from "react-google-login";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const ExtraSection = () => {
  return (
    <div className="side-section extra-section">
      <div className="container">
        <form className="signup-form">
          <h2>New to Twitter?</h2>
          <p>Sign up now to het your own personalized timeline!</p>
          <div className="button-container">
            <a
              className="forGoogle"
              href="https://accounts.google.com/gsi/select?client_id=49625052041-kgt0hghf445lmcmhijv46b715m2mpbct.apps.googleusercontent.com&ux_mode=popup&ui_mode=card&as=YIO42hsWoglVgmXbWfGc%2FA&channel_id=8b8f3800440b91557079bfd9c0520beb14ba3f3ac1a51d2367dd32e9f00fc467&origin=https%3A%2F%2Ftwitter.com"
            >
              <button className="google-button">
                <div className="google-icon">
                  <i>a</i>
                </div>
                <div className="google-username">
                  <h4>Sign in as user.name</h4>
                  <h3><FcGoogle />Sign in with Google</h3>
                  <p>dahalavishek2022@gmail.com</p>
                </div>
                <div className="google-logo">
                  <FcGoogle />
                </div>
              </button>
            </a>
            <a>
              <button>
                <h3>
                  <FaApple />
                  Sign up with Apple
                </h3>
              </button>
            </a>
            <a>
              <button>
                <h3>Create account</h3>
              </button>
            </a>
          </div>
          <p>
            By signing up, you agree to the <a>Terms of Service</a> and{" "}
            <a>Privacy policy</a>, including <a>Cookie Use</a>.
          </p>
        </form>
        <div className="all-links">
          <a>Terms of Service</a>
          <a>Privacy Policy</a>
          <a>Cookie Policy</a>
          <a>Accessibility</a>
          <a>Ads info</a>
          <a>More...</a>
          <a>@2023 X Corp.</a>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
