import React, {Component} from 'react';
import LoginPage from './containers/LoginPage';
import NotePage from './containers/NotePage';
import HomePage from './containers/HomePage';
import RegistrationPage from './containers/RegistrationPage';
import ProfilePage from './containers/ProfilePage';
import UploadPage from './containers/UploadPage';

import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={LoginPage} />
                    <Route exact path='/NotePage/' component={NotePage} />
                    <Route exact path='/HomePage/' component={HomePage} />
                    <Route exact path='/RegistrationPage/' component={RegistrationPage} />
                    <Route exact path='/ProfilePage/' component={ProfilePage} />
                    <Route exact path='/UploadPage/' component={UploadPage} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;