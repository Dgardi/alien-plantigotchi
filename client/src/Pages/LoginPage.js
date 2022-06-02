// import '../styles/styles.css';
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import React from "react";

export default function LoginPage() {
  return (
    <div className="parentWrapper">
      <div>
        <h2>Log in or sign up</h2>
        <div>{/* add in images here */}</div>
      </div>
      <LoginForm />
      <SignUpForm />
    </div>
  );
}
