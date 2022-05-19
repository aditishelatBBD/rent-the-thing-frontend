import React from "react";
import './componentstyle.css';
import Home from "./Home";

const LoginForm = ({ isShowLogin ,RegClick}) =>
{
    return(
        <div className={`${!isShowLogin ? "active" : ""} show`}>
            <div className="main">
            <div className="login-form">
                <div className="form-box solid">
                    <form>
                        <h1 className="login-text">
                            Sign In
                        </h1><hr></hr><br></br>
                    <br></br>
                            <i class="fa fa-user icon"></i>
                        <input type="text" className="login-box" placeholder="USERNAME"></input>
                        <br></br><br></br>
                        <i class="fa fa-key icon"></i>
                        <input type="password" name="password" className="login-box" placeholder="PASSWORD"></input><br>
                        </br><br></br><br></br>
                        <input type="submit" value="LOGIN" className="login-btn"></input> 
                    </form><br></br>
                    <label>New User?</label><span className="link" onClick={RegClick}>Create an account!</span>
                </div>
            </div>
            </div>
        </div>
    );
}

export default LoginForm;


