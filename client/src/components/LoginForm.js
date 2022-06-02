import React, { useState } from "react";
import { loginUser } from '../utils/API';
// import '../styles/styles.css';

export default function Login() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [userName, setUserName] = useState("");
  // const [emailSubmission, setEmailSubmission] = useState("");
  const [passwordSubmission, setPasswordSubmission] = useState("");

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
      password: passwordSubmission
    }

    // Runs loginUser fetch request with userData object
    try {
      const response = await loginUser(userData);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      // const user = await response.json();
      console.log("SUCCESS!!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <p>Login:</p>
      <form className="form">
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="User Name"
        />
        <br></br>
        <input
          value={passwordSubmission}
          name="passwordSubmission"
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
        />
        <br></br>
        <button type="button" onClick={handleFormSubmit}>
          Login
        </button>
      </form>
    </div>
  );
}
