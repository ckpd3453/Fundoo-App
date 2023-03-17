import React from "react";
import "./Login.css";
import TextArea from "../TextArea/TextArea";
import Button from "@mui/material/Button";
import SignUpPage from "../../Pages/SignUpPage";
import { Link } from "react-router-dom";

export default function Login() {
  const width = {
    width: "80%",
  };
  return (
    <div className="main-div">
      <div className="loginContainer">
        <div className="login-header">
          <img
            src="https://blog.hubspot.com/hs-fs/hubfs/The%20Secret%20History%20of%20the%20Google%20Logo-4.jpeg?width=528&name=The%20Secret%20History%20of%20the%20Google%20Logo-4.jpeg"
            alt="Google"
            className="login-logo"
          />
          <div className="login-title">Sign in</div>
          <div className="login-sub-title">Use your Google Account</div>
        </div>
        <div className="login-body">
          <div className="login-text-area">
            <TextArea msg="Email or phone" width={width} />
          </div>
          <div className="login-text-area">
            <TextArea msg="Password" width={width} />
          </div>
          <a href="" className="forgot-link">
            Forgot email?
          </a>
          <div className="login-description">
            Not your device? Use Guest mode to sign in privately.{" "}
            <a href="" className="learn">
              Learn more
            </a>
          </div>
        </div>
        <div className="login-footer">
          <Button variant="text" sx={{ color: "rgb(0, 162, 255);" }}>
            <Link to={"/signup"} className="redirect">
              Create account
            </Link>
          </Button>
          <Button variant="contained">Sign in</Button>
        </div>
      </div>
    </div>
  );
}
