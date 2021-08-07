import './App.css';
import axios from "axios";
import React, { useEffect } from 'react';


function App() {
  return (
    <div className="App">
      <div>
        {
          useEffect( ()=> {
            axios.get("http://localhost:7777/")
            .then(response => console.log(response))}, [])
        }
        <h1>TEST Connection Client-Server</h1>
      </div>
    </div>
  );
}


export default App;


