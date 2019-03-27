import React, { Component } from 'react';
import './materialize/css/materialize.css';

const profileContainer = {
    paddingLeft: '30px',
    paddingTop: '30px'
}


class ProfilePage extends Component {
    render() {
        return (
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
                                            <input type="text" placeholder="search" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><a href="#" className="amber-text text-lighten-2">Settings</a></li>
                    </ul>
                </div>
            </nav>
            <div className="col s12 m8 offset-m2 l6 offset-l3" style={profileContainer}>
                <div className="row valign-wrapper">
                    <div className="col s2">
                        <img src="test2.jpg" alt="" className="circle responsive-img" /> <!-- notice the "circle" class -->
                    </div>
                    <div className="col s10">
                        <span className="black-text" style={{fontSize: '40px'}}>Name</span>
                    </div>
                </div>
            </div>
            <div>
                <div className="row">
                    <div className="col s10" style={{paddingLeft: '280px'}}>
                        <div className="card-panel amber lighten-4">
                            <h4 className="black-text">Information</h4>
                            <p className="black-text">School: </p>
                            <p className="black-text">Courses: </p>
                            <p className="black-text">Bio: </p>
                            <p className="black-text">Username: </p>
                            <p className="black-text">Password: </p>
                            <p className="black-text">Email address: </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilePage;