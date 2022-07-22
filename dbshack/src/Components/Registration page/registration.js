import React from "react";
import "./registration.css";
import axios from "axios";

function Register() {
  const popout = () => alert("Submitted!");

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { name, username, pwd, confirm } = document.forms[0];
    console.log(username.value, pwd.value);
    axios.post("http://localhost:5000/login", {
      username: username.value,
      password: pwd.value,
      name: name.value,
    });
  };

  return (
    <div className="app">
      <form className="form" onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          name="name"
          type="text"
          className="name"
          minlength="1"
          required
        />
        <br></br>
        <label>Username: </label>
        <input
          type="text"
          className="username"
          name="username"
          minlength="3"
          required
        />
        <br></br>
        <label>Password: </label>
        <input
          type="password"
          className="pwd"
          name="pwd"
          minlength="8"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          required
        />
        <br></br>
        <label>Confirm password: </label>
        <input
          type="password"
          className="confirm"
          name="confirm"
          minlength="8"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          required
        />
        <br></br>
        <input
          type="submit"
          className="submit"
          value="Register"
          onClick={popout}
        />
      </form>
    </div>
  );
}

export default Register;
