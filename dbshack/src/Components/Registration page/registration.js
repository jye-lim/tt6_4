import React from "react";
import "./registration.css";

function Register (){
    const popout = () => alert("Submitted!");

    return  (
        <div className="app">
            <form className="form">
            <label>Name:</label>
                <input type="text" className="name" minlength="1" required />
                <br></br>
                <label>Username:</label>
                <input type="text" className="username" name="username" minlength="3" required />
                <br></br>
                <label>Password:</label>
                <input type="password" className="pwd" name="pwd" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
                <br></br>
                <label>Confirm password:</label>
                <input type="password" className="confirm" name="confirm" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required />
                <br></br>
                <input type="submit" className="submit"  value="Register" onClick= {popout}/>
            </form>
        </div>
    )
}

export default Register;