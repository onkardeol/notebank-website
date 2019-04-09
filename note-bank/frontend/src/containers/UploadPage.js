import React, { Component } from 'react';
import './materialize/css/materialize.css';


class UploadPage extends Component  {
    render() {
        return(
            <div className = "UploadPage">
                <nav class="white">
                    <div class="nav-wrapper">
                        <a href="#" class="brand-logo amber-text text-lighten-2">NoteBank</a>   
                        <ul class="hide-on-med-and-down right">
                            <li>
                                <div class="center row">
                                    <div class="col s12 " >
                                        <div class="row" id="topbarsearch">
                                            <div class="input-field col s6 s12 amber-text text-lighten-2">
                                                <i class="amber-text text-lighten-2 material-icons prefix">search</i>
                                                <input type="text" placeholder="search"/>
                                            </div>
                                    </div>
                                    </div>
                                </div>
                            </li>
                            <li><a href="#" class="amber-text text-lighten-2">Settings</a></li>
                        </ul>
                    </div>
                </nav>
                <div class="row">
                    <div class="col card hoverable s6 offset-s3">
                        <form>
                            <div class="card-content">
                                <span class="card-title">Upload Note</span>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <input type="text" class="validate" name="school" id="school" placeholder="Name of School"/>
                                    </div>
                                    <div class="input-field col s12">
                                        <input type="text" class="validate" name="Professor" id="professor" placeholder="Name of Professor"/>
                                    </div>
                                    <div class="input-field col s12">
                                        <input type="text" class="validate" name="course" id="course" placeholder="Course Code"/>
                                    </div>
                                    <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>
                                    <ul id='dropdown1' class='dropdown-content'>
                                        <li><a href="#!">one</a></li>
                                        <li><a href="#!">two</a></li>
                                        <li class="divider" tabindex="-1"></li>
                                        <li><a href="#!">three</a></li>
                                    </ul>
                                    <div class="input-field col s12">
                                        <input type="text" class="validate" name="mark" id="mark" placeholder="Final Mark Received (Not required)"/>
                                    </div>
                                    <div class="input-field col s12">
                                        <input type="text" class="validate" name="timetaken" id="timetaken" placeholder="When did you take the course?"/>
                                    </div>
                                    <div class="file-field input-field col s12">
                                        <div class="btn">
                                            <span>Note</span>
                                            <input type="file"/>
                                        </div>
                                        <div class="file-path-wrapper">
                                            <input class="file-path validate" type="text" placeholder="Must be in PDF format!"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="card-action right-align">
                                    <button class="btn waves-effect waves-light col s12" type="submit" name="action" style = "margin-bottom: 10px;">Upload Note</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
        }
}

export default UploadPage;