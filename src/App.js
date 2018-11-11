import React, { Component } from "react";
import { hot } from "react-hot-loader";

import Nav from './components/Nav';

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav foo='1' />
      </div>
    );
  }
}

export default hot(module)(App);