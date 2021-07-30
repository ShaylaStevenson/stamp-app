import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import purpleFlower from "./img/purpleFlower.jpg"

function App() {
  return (
    <div className="App">
      <h1>STAMP APP!</h1>
      <img src={purpleFlower} alt="purple flower"/>
    </div>
  );
}


export default App;
