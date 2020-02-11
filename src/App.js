import React, { Component } from "react";
import "./App.css";
import { AppBar, Toolbar } from "@material-ui/core";
import Login from "./Components/Login";
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import SettingsIcon from '@material-ui/icons/Settings';

class App extends Component {
  render() {
    return (
        <div className="App">
                <AppBar style={{ background: "green" }} position="static">
                    <Toolbar> 
                      <MenuOpenRoundedIcon className='menu-icon'>
                        <i class="material-icons">menu_open</i>
                      </MenuOpenRoundedIcon>
                         My Music App
                      <SettingsIcon className='setting-icon'>
                        <i class="material-icons">settings</i>
                      </SettingsIcon>
                      </Toolbar>   
                </AppBar>
            <div className = 'Container'>
            <Login />
            </div>
        </div>
    );
  }
}

export default App;
