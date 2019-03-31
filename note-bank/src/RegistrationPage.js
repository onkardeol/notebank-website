import React, { Component } from 'react';
import './materialize/css/materialize.css';
import {NavLink} from "react-router-dom";

class RegistrationPage extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstname: '',
            lastname: '',
            pass: '',
            passconfirm: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(event) {
        return function(e) {
            var state = {};
            state[event] = e.target.value;
            this.setState(state);
        }.bind(this);
        /*this.setState({email: event.target.email});
        this.setState({
            firstname: event.target.firstname,
            lastname: event.target.lastname,
            pass: event.target.pass,
            passconfirm: event.target.passconfirm
        });*/

    }

    handleSubmit(event) {
        var data = {
            email: this.state.email,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            pass: this.state.pass,
            passconfirm: this.state.passconfirm,
        }

        var query = 'INSERT'
        alert("Email: " + this.state.email + "; Firstname: " + this.state.firstname + "; Lastname: " + this.state.lastname + "; pass: " + this.state.pass + "; Pass Confirm: " + this.state.passconfirm);
        event.preventDefault();
    }

    render() {
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
                        <form onSubmit={this.handleSubmit}>
                            <div className="card-content">
                                <span className="card-title">Sign Up</span>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input type="email" className="validate" name="email" id="email" placeholder="Email address" value={this.state.email} onChange={this.handleChange('email')}/>
                                    </div>
                                    <div className="input-field col s6">
                                        <input type="text" className="validate" name="firstname" id="firstname" placeholder="First name" value={this.state.firstname} onChange={this.handleChange('firstname')}/>
                                    </div>
                                    <div className="input-field col s6">
                                        <input type="text" className="validate" name="lastname" id="lastname" placeholder="Last name" value={this.state.lastname} onChange={this.handleChange('lastname')}/>
                                    </div>
                                    <div className="input-field col s12">
                                        <input type="text" className="validate" name="pass" id="pass" placeholder="Create password" value={this.state.pass} onChange={this.handleChange('pass')}/>
                                    </div>
                                    <div className="input-field col s12">
                                        <input type="text" className="validate" name="passconfirm" id="passconfirm" placeholder="Confirm password" value={this.state.passconfirm} onChange={this.handleChange('passconfirm')}/>
                                    </div>
                                </div>
                            </div>
                            <div className="card-action right-align">
                                <NavLink to="/"><input className="btn waves-effect waves-light amber accent-2" type="submit" name="action" value="Already a Member"/></NavLink>
                                <NavLink to="/HomePage/"><input className="btn waves-effect waves-light amber accent-2" type="submit" name="action" value="Sign Up"/></NavLink>
                                <input className="btn waves-effect waves-light amber accent-2" type="submit" name="action" value="Sign Up"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegistrationPage;
