import React, { useState } from 'react';
//need to create styles and link here
// import '../styles/styles.css';


export default function Login () {
    // Here we set two state variables for firstName and lastName using `useState`
    const [userName, setUserName] = useState('');
    const [passwordSubmission, setPasswordSubmission] = useState('');
  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { name, value } = e.target;
    //   console.log(e.target)
  
      switch(name) {
        case "userName":
            setUserName(value)
          break;
        case "passwordSubmission":
            setPasswordSubmission(value)
          break;
        default:
      }

    return null; 
    };

  
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();

        if (!pattern.test(emailSubmission)) {
            document.getElementById("errors").style="display: block"
      } else {
        document.getElementById("errors").style="display: none"
      }

    };
  
    return (
      <div>
        <p>
          Create an account: 
        </p>
        <form className="form">
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <br></br>
          <input
            value={passwordSubmission}
            name="passwordSubmission"
            onChange={handleInputChange}
            //DO WE NEED TO CHANGE THE TYPE???
            type="text"
            placeholder="Password"
          />
          <br></br>
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
  