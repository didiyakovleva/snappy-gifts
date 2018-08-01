import React, { Component } from 'react';
import logo from './imgs/snappy-rocket.png';
import './App.css';
import Form from './containers/FormContainer';
import List from './containers/ListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Snappy</h1>
        </header>
        <Form/>
        <List/>
      </div>
    );
  }
}

export default App;
