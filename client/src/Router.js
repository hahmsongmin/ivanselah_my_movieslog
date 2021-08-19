import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
// components
import NavBar from "./views/components/NavBar";
// users
import Join from "./views/users/Join";
import Login from "./views/users/Login";
// Routes
import Search from "./views/Routes/Search";
import Home from "./views/Routes/Home";
import TV from "./views/Routes/TV";
import Movies from "./views/Routes/Movies";
import Detail from "./views/Routes/Detail";
import MyLog from "./views/Routes/MyLog";
import HomeContainer from "./views/Routes/Home/HomeContainer";

const Router = ({user}) => (
    <BrowserRouter>
        <NavBar user={user} />
        <Switch>
            <Route exact path="/" component={Home} render={()=><HomeContainer user={user} />}/>
            <Route exact path="/tv" component={TV} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/movie/:id([0-9]+)" component={Detail} />
            <Route exact path="/tv/:id([0-9]+)" component={Detail} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/join" component={Join} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/mylog" component={MyLog} />
            <Redirect from="*" to="/" />
        </Switch>
    </BrowserRouter>
)


export default Router;

// default Router => all Route들에게 props 전달