import React, { Component } from 'react';
import './materialize/css/materialize.css';
import Background from './images/background.jpg'

const cardPStyle = {
  marginLeft:'10px',
  display:'inline-block'
}

const backgroundImage = {
  backgroundImage: "url(" + Background + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  minHeight: '100%'
}

class App extends Component {
  render() {
    return (
      <div className="App" style={backgroundImage}>

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
                      <p className="margin medium-small" style={cardPStyle}><a href="#">Register</a></p>
                      <button className="btn waves-effect waves-light" type="submit" name="action">Sign  In</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
