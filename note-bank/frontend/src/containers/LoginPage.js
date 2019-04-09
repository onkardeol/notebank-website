import React, { Component } from 'react';

import './materialize/css/materialize.css';
import './css/loginpage.css';
import {
  Route,
  NavLink,
  HashRouter,
  Router,
  Link,
  BrowserRouter
} from "react-router-dom";
import HomePage from "./HomePage";
import NotePage from "./NotePage";
import ProfilePage from "./ProfilePage";
import RegistrationPage from "./RegistrationPage";
import UploadPage from "./UploadPage";

const cardPStyle = {
  marginLeft:'10px',
  display:'inline-block'
}

class LoginPage extends Component {
  render() {
    return (
      <div className="LoginPage">
  <nav className="white">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo amber-text text-lighten-2">NoteBank</a>   
                <ul className="hide-on-med-and-down right">
                    <li><NavLink to="/LoginPage/"><a href="/LoginPage" className="amber-text text-lighten-2">Login</a></NavLink></li>
                    <li><NavLink to="/RegistrationPage/"><a href="/RegistrationPage" className="amber-text text-lighten-2">Register</a></NavLink></li>
                    <li><NavLink to="/HomePage/"><a href="/HomePage" className="amber-text text-lighten-2">Home</a></NavLink></li>
                    <li><NavLink to="/UploadPage/"><a href="/UploadPage" className="amber-text text-lighten-2">Upload</a></NavLink></li>
                    <li><NavLink to="#"><a href="#" className="amber-text text-lighten-2">Settings</a></NavLink></li>
                </ul>
            </div>
        </nav>
        <div className="valign-wrapper row-landingpage login-box">
          <div className="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
            <form>
              <div className="card-content">
                <span className="card-title">Enter credentials</span>
                
                <div className="row">
                  <div className="input-field col s12">
                    <input type="email" className="validate" name="email" id="email" placeholder="Email address"/>
                  </div>
                  
                  <div className="input-field col s12">
                    <input type="password" className="validate" name="password" id="password" placeholder="Password"/>
                  </div>
                </div>
              </div>
              

                <div>
                  <div className="card-action right-align">
                      <NavLink to="/RegistrationPage/"><p className="margin medium-small" style={cardPStyle}><a href="/RegistrationPage">Register</a></p></NavLink>
                      <NavLink to="/HomePage/"><button className="btn waves-effect waves-light" type="submit" name="action">Sign  In</button></NavLink>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

export default LoginPage;
