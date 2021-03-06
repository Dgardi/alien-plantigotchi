import React, { useState } from "react";
import Auth from '../utils/auth'
// import '../styles/styles.css';

export default function SignUp() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [userName, setUserName] = useState("");
  const [emailSubmission, setEmailSubmission] = useState("");
  const [passwordSubmission, setPasswordSubmission] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;
    //   console.log(e.target)

    switch (name) {
      case "userName":
        setUserName(value);
        break;
      case "emailSubmission":
        setEmailSubmission(value);
        break;
      case "passwordSubmission":
        setPasswordSubmission(value);
        break;
      default:
    }

    return null;
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    if (!pattern.test(emailSubmission)) {
      document.getElementById("errors").style = "display: block";
    } else {
      document.getElementById("errors").style = "display: none";
    }
  };

  return (
    <div className="formBox">
      <form className="form">
        <div className="account">Don't have an account?</div>
        <div className="register">Register Now</div>
        <input
          className="inputBox"
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Create Username"
        />
        <br></br>
        <input
          className="inputBox"
          value={emailSubmission}
          name="emailSubmission"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <br></br>
        <input
          className="inputBox"
          value={passwordSubmission}
          name="passwordSubmission"
          onChange={handleInputChange}
          //DO WE NEED TO CHANGE THE TYPE???
          type="text"
          placeholder="Create Password"
        />
        <br></br>
        <button
          className="createAccount"
          type="button"
          onClick={handleFormSubmit}
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
