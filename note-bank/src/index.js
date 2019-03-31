import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import LoginPage from './LoginPage';
import App from './App'
//import * as serviceWorker from './serviceWorker';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
          <div>
              <div><ul>
                  <li>One</li>
                  <li>Two</li>
            </ul></div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>

      );
    }
  }
  
 /* ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
  );*/

ReactDOM.render(
    <App/>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
