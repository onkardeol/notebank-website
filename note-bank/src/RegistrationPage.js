import React, { Component } from 'react';
import './materialize/css/materialize.css';


const RegistrationPage = () =>  {
        return(
            <div className ="RegistrationPage">
                <nav className="white">
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo amber-text text-lighten-2">NoteBank</a>   
                        <ul className="hide-on-med-and-down right">
                            <li>
                                <div className="center row">
                                    <div className="col s12 " >
                                        <div className="row" id="topbarsearch">
                                            <div className="input-field col s6 s12 amber-text text-lighten-2">
                                                <i className="amber-text text-lighten-2 material-icons prefix">search</i>
                                                <input type="text" placeholder="search"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><a href="#" className="amber-text text-lighten-2">Settings</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="valign-wrapper row-registrationpage login-box">
                    <div className="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
                        <form>
                            <div className="card-content">
                                <span className="card-title">Sign Up</span>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input type="email" className="validate" name="email" id="email" placeholder="Email address"/>
                                    </div>
                                    <div className="input-field col s6">
                                        <input type="text" className="validate" name="firstname" id="firstname" placeholder="First name"/>
                                    </div>
                                    <div className="input-field col s6">
                                        <input type="text" className="validate" name="firstname" id="lastname" placeholder="Last name"/>
                                    </div>
                                    <div className="input-field col s12">
                                        <input type="text" className="validate" name="pass" id="pass" placeholder="Create password"/>
                                    </div>
                                    <div className="input-field col s12">
                                        <input type="text" className="validate" name="passconfirm" id="passconfirm" placeholder="Confirm password"/>
                                    </div>
                                </div>
                            </div>
                            <div className="card-action right-align">
                                <button className="btn waves-effect waves-light amber accent-2" type="submit" name="action">Already a Member</button>
                                <button className="btn waves-effect waves-light amber accent-2" type="submit" name="action">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
}

export default RegistrationPage;