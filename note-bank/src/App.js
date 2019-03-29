import React, {Component} from 'react';
import LoginPage from './LoginPage';
import NotePage from './NotePage';
import HomePage from './HomePage';
import RegistrationPage from './RegistrationPage';

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
                </div>
            </BrowserRouter>
        )
    }
}

export default App;