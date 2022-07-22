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

    return (
        <div></div>
    );
}