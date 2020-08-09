import React from 'react';

import './style.scss';
import HowToImg from '../assets/howTo.jpg';

const Login = () => {
    return(
        <div className="login">
            <div>
                <img className="left-image" src={HowToImg} alt=""/>
            </div>
            <div className="login-card">
                <h2 className="header">
                    Sign in
                </h2>
                <form>
                    <input className="form-input inputter" type="text" id="fname" name="Email" placeholder="Email..." />
                    <div className="password inputter">
                        <button className="comment">Forgot Password?</button>
                        <input className="form-input" type="text" id="lname" name="Password" placeholder="Password..." />
                    </div>
                    <button className="form-input submit" type="submit" >Let's Grow!</button>
                    <div className="password inputter">
                        <div className="comment">Don't have an account?</div>
                        <button className="form-input" type="submit" >Lets'Grow!</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;