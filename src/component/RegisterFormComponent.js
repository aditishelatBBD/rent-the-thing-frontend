import React from "react";
import './componentstyle.css';
import Home from "./Home";

const RegisterFormComponent = ({ isShowRegister,LoginClick }) => {
  return (
    <div className= {`${!isShowRegister ? "active" : ""} show`}>
        <div className="main">

        <div className="reg-form">
        <div className="reg-form-box solid">
            <form>
                <h1 className="login-text">
                    Sign Up
                </h1><hr></hr><br></br>
                    <i className="fa fa-user icon"></i>
                <input type="text" className="login-box" placeholder="USERNAME"></input>
                <br></br><br></br>

                <i className="fa fa-envelope icon"></i>
                <input type="text" className="login-box" placeholder="EMAIL"></input>
                <br></br><br></br>

                <i className="fa fa-key icon"></i>
                <input type="password" name="password" className="login-box" placeholder="PASSWORD"></input><br>
                </br><br></br>

                <i className="fa fa-key icon"></i>
                <input type="password" name="password" className="login-box" placeholder="CONFIRM PASSWORD"></input><br>
                </br><br></br><br></br>
                <input type="submit" value="REGISTER" className="login-btn"></input> 
            </form><br></br>
            <label>Already have an account?</label><span className="link" onClick={LoginClick}>Login here!</span>
        </div>
    </div>
        </div>
    
</div>

  )
}

export default RegisterFormComponent
