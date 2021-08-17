import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import Helmet from "react-helmet";
import axios from "axios";

class Join extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            joinSeccess : null,
            isJoinOK : false,
            joinError: null,
        }
        this.submitJoin = this.submitJoin.bind(this);
    }

    async submitJoin(event) {
        event.preventDefault();
        const email = event.target.email.value;
        const username = event.target.username.value;
        const password = event.target.password.value;
        const password2 = event.target.password2.value;

        try{
            const response = await axios("http://localhost:7777/join", {
                method: "post",
                data: {
                    email,
                    username,
                    password,
                    password2,
                },
            })
            this.setState({joinSeccess : response.data})
        } catch {
            console.log("❌에러");
        } finally {
            this.setState({isJoinOK : true})
        }

    };
    
    render(){
        const {joinSeccess, isJoinOK, joinError} = this.state;
        return (
            <>
                <Helmet>
                    <title>Join | Logflix</title>
                </Helmet>
                {isJoinOK ? (
                    <Redirect to="/" />
                ) : (
                    <>
                    <div className="users-form">
                        <span>LOGFLIX JOIN</span>
                    </div>
                    <form Method="POST" onSubmit={this.submitJoin} className="users-join-form">
                        <input placeholder="Email" name="email" type="email" required autoComplete="off" />
                        <input placeholder="Username" name="username" type="text" required autoComplete="off" />
                        <input placeholder="Password" name="password" type="password" required autoComplete="off"/>
                        <input placeholder="Confirm Password" name="password2" type="password" required autoComplete="off"/>
                        <input type="submit" value="Join" />
                        <div className="social-login">
                            <a href="" className="social-login__btn">
                                <FaGithub className="github-icon"></FaGithub> 깃허브 로그인 &rarr;
                            </a>
                        </div>
                        <div className="users-join-form__btn-switch">
                            <span>Already have an account?</span>
                            <a href="/login" className="users-join-form__btn-switch__create">Login now &rarr;</a>
                        </div>
                    </form>
                    </>
                )}
            </>
        )
    }
};

export default Join;