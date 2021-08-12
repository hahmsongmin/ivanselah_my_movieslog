import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./views/components/NavBar";
import Join from "./views/users/Join";
import Login from "./views/users/Login";
import Home from "./views/Home";

export default () => (
    <BrowserRouter>
        <NavBar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/join" component={Join} />
            <Route exact path="/login" component={Login} />
            <Redirect from="*" to="/" />
        </Switch>
    </BrowserRouter>
)