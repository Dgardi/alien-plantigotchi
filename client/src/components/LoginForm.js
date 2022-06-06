import React, { useState } from "react";
import { loginUser } from "../utils/API";
import { useLogin } from "../utils/UserContext";
import { useNavigate } from "react-router-dom";
import Auth from '../utils/auth'

// import '../styles/styles.css';

export default function Login() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [userName, setUserName] = useState("");
  // const [emailSubmission, setEmailSubmission] = useState("");
  const [passwordSubmission, setPasswordSubmission] = useState("");
  const { updateUser } = useLogin();
  const nav = useNavigate();

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    switch (name) {
      case "userName":
        setUserName(value);
        break;
      case "passwordSubmission":
        setPasswordSubmission(value);
        break;
      default:
    }

    return null;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevents clearing the form

    // Makes object will all required data for login route
    const userData = {
      username: userName,
      password: passwordSubmission,
    };

    // Runs loginUser fetch request with userData object
    nav("/home");
  };

  return (
    <div className="formBox">
      <form className="form">
        <div className="account">Already have an account?</div>
        <div className="login">Log In Here</div>
        <input
          className="inputBox"
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Username"
        />
        <br></br>
        <input
          className="inputBox"
          value={passwordSubmission}
          name="passwordSubmission"
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
        />
        <br></br>
        <button
          className="loginButton"
          type="button"
          onClick={handleFormSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
}
