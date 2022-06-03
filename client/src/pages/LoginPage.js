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
      <div className="parentWrapper">
        <div>
          <h2>Log in or sign up</h2>
        </div>
        <LoginForm />
        <SignUpForm />
      </div>
    </div>
  );
}
