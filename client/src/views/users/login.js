import React from "react";
import { FaGithub } from "react-icons/fa";
import Helmet from "react-helmet";
import { Redirect, Link } from "react-router-dom";

const Login = () => {
    return (
        <>
        <Helmet>
            <title>Login | Logflix</title>
        </Helmet>
        <div className="users-form">
            <span>LOGFLIX LOGIN</span>
        </div>
        <form method="POST" className="users-login-form">
            <input placeholder="Email" name="email" type="email" required autoComplete="off" />
            <input placeholder="Password" name="password" type="password" required autoComplete="off"/>
            <input type="submit" value="Login" />
            <div className="social-login">
                <Link to="" className="social-login__btn">
                    <FaGithub className="github-icon"></FaGithub> 깃허브 로그인 &rarr;
                </Link>
            </div>
            <div className="users-login-form__btn-switch">
                <span>New to LOGFLIX?</span>
                <Link to="/join" className="users-login-form__btn-switch__create">Create your account &rarr;</Link>
            </div>
        </form>
        </>
    )
};

export default Login;