// import '../styles/styles.css';
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import Header from "../components/Header";
import React from "react";
import Footer from "../components/Footer";


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
      </div>
      <div className="directions">
        <div className="directionsHeader">Directions</div>
        <p>
          Welcome to Plant Planet, home to several strange and wonderful plant
          specimens.
        </p>
        <p>
          {" "}
          You are the caretaker and it is your job to care for each plant and
          help it grow. Water them, fertilize them, give them sunlight, or even
          sing to them by clicking the buttons below each plant. Your choices
          may help increase the plant's life points...or they may not help at
          all.
        </p>
        <p>
          {" "}
          When each plant has acquired enough life points, it will level up to
          the next stage in its life cycle. Play through each plant to watch
          them bloom!
        </p>
      </div>

      <Footer />
    </div>
  );
}
