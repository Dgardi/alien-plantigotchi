// import '../styles/styles.css';
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import Header from "../components/Header";
import React from "react";

export default function LoginPage() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="loginPageRender">
        <div className="parentWrapper loginBox">
          <LoginForm />
        </div>
        <div className="parentWrapper signupBox">
          <SignUpForm />
        </div>
        <div className="directions">
          <div className="directionsHeader">Directions</div>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nam,
            necessitatibus provident magnam deleniti labore aspernatur eum est
            commodi sit dolor molestiae nesciunt quidem placeat, odit mollitia
            cumque quas nulla?
          </p>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nam,
            necessitatibus provident magnam deleniti labore aspernatur eum est
            commodi sit dolor molestiae nesciunt quidem placeat, odit mollitia
            cumque quas nulla?
          </p>
        </div>
      </div>
    </div>
  );
}
