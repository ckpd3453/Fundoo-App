import React from "react";
import TextArea from "../TextArea/TextArea";
import "./SignUp.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="main-div">
      <div className="container">
        <div className="form">
          <div className="header">
            <img
              src="https://blog.hubspot.com/hs-fs/hubfs/The%20Secret%20History%20of%20the%20Google%20Logo-4.jpeg?width=528&name=The%20Secret%20History%20of%20the%20Google%20Logo-4.jpeg"
              alt="Google"
              className="logo"
            />

            <div className="title">
              <b> Create your Google Account </b>
            </div>
          </div>
          <div className="body">
            <div className="name">
              <TextArea msg="First name" width={{ width: "100%" }} />

              <TextArea msg="Last name" width={{ width: "100%" }} />
            </div>
            <div className="user-name">
              <TextArea msg="Username" width={{ width: "80%" }} />
              <div className="user-name-description">
                You can use letters, numbers & periods.
              </div>
            </div>
            <a href="" className="link">
              Use my current email address instead
            </a>
            <div className="password">
              <TextArea msg="Password" width={{ width: "100%" }} />
              <TextArea msg="Confirm" width={{ width: "100%" }} />
            </div>
            <div className="password-hint">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </div>
            <div className="checkbox">
              <input type="checkbox" name="" id="check" />
              Show password
            </div>
          </div>
          <div className="footer">
            <Button variant="text" sx={{ color: "rgb(0, 162, 255);" }}>
              <Link to={"/"} className="redirect">
                Sign in instead
              </Link>
            </Button>
            <Button variant="contained">Sign up</Button>
          </div>
        </div>
        <div className="image">
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ4PBh-satuPZF7oX45X1XoKlwLDRWJ0L7_gumoodylIh7IgY6x"
            alt="Image"
            className="body-img"
          />
          <div className="img-title">
            One account. All of Google <br /> working for you.{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
