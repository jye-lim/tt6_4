import React from "react";

function Register (){
    return  (
        <div>
            <form>
            <label>Name:</label>
                <input type="text" id="name" minlength="1" required />
                <br></br>
                <label>Username:</label>
                <input type="text" id="username" name="username" minlength="6" required />
                <br></br>
                <label>Password:</label>
                <input type="password" id="pwd" name="pwd" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
                <br></br>
                <label>Will you be coming?:</label>
                <select name="attendance">
                    <option value="yes">Yes, i am coming</option>
                    <option value="no">No, i am not coming</option>
                </select>
            </form>
        </div>
    )
}

export default Register;