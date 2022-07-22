import React, { useState } from "react";
import axios from "axios";
// import ReactDOM from "react-dom";
import "./homepage.css";

function Homepage() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info hardcode

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    console.log(uname.value, pass.value);
    axios.post("http://localhost:5000/login", {
      username: uname.value,
      password: pass.value,
    });
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" value="Log in" />
        </div>
      </form>
    </div>
  );

  //JSX code for register form
  // const registerForm = (
  //     <div className="button-container">
  //         <input type="submit" value="Register now" />
  //     </div>

  // )

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
      <div className="button-container">
        <input type="submit" value="Register now" />
      </div>
    </div>
  );
}

export default Homepage;
