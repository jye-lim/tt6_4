import React, { useState } from "react";
// import ReactDOM from "react-dom";
import './homepage.css'

function Homepage (){
     // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info hardcode
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];









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
              <input type="submit" />
            </div>
          </form>
        </div>
      );

    return (
        <div></div>
    );
}

export default Homepage;