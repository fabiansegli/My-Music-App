import React, { Component } from "react";
import "./App.css";
import { AppBar, Toolbar } from "@material-ui/core";
import Login from "./Components/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar style={{ background: "green" }} position="static">
          <Toolbar>My Music App</Toolbar>
        </AppBar>
        <div className = 'Container'>
        <Login />
        </div>
      </div>
    );
  }
}

export default App;
