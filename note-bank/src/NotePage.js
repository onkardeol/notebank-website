import React, { Component } from 'react';
import './materialize/css/materialize.css';

const courseInfo = {
    height: '600px',
    paddingTop: '150px'
}

const pdfHolder = {
    height: '600px',
    paddingTop: '75px'
}

class NotePage extends Component {

    render() {
        return (
            <div className = "NotePage">
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
                <div className="row">
                    <div className="col s4 m4" style={courseInfo}>
                        <div className="card-panel amber lighten-4">
                            <h4 className="black-text">Note Information</h4>
                            <p className="black-text">Uploader: </p>
                            <p className="black-text">Professor: </p>
                            <p className="black-text">School: </p>
                            <p className="black-text">Course: </p>
                            <p className="black-text">Mark: </p>
                            <p className="black-text">Year: </p>
                        </div>
                    </div>
                    <div className="col s8 m8" style={pdfHolder}>
                        <object
                            data="file:///C:/Users/linda/OneDrive/Documents/GitHub/notebank-website/IntroductionToPHP.pdf"
                            type="application/pdf"
                            width="100%"
                            height="100%">
                            <p>Your browser does not support PDFs.
                                <a href="file:///C:/Users/linda/OneDrive/Documents/GitHub/notebank-website/IntroductionToPHP.pdf">Download the PDF</a>.
                            </p>
                        </object>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotePage;