import "./scss/base.scss";
import React, { Component } from 'react';
import BrowserRouter from "./Router";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user : null,
    }
  }

  componentDidMount = async () => {
    const user = await axios("http://localhost:7777/", {
    method : "get",
    withCredentials: true
    })
    this.setState({ user : user.data });
  }  

  render(){
    const { user } = this.state;
    return (
      <>
        <BrowserRouter  user = {user} />
      </>
    )
  }
}
export default App;

