import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';
import Phish from './react_phish';
import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Route exact={true} path='/' render={() => (
      <div className="App">
        <Phish />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      )}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
