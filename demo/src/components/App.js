import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

import Icon from "@material-ui/core/Icon";

import SupportIcon from "../containers/SupportIcon";
import { SupportDrawer } from "support-drawer-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SupportDrawer />
        <header className="App-header">
          <Icon style={{ fontSize: 100 }} className="App-logo">
            help_outline
          </Icon>
          <h1 className="App-title">support-drawer-redux</h1>
        </header>
        <p className="App-intro">
          Demo using the&nbsp;
          <a href="https://github.com/jamstooks/support-drawer-redux">
            support-drawer-redux
          </a>{" "}
          package.
        </p>
        <p>
          Click for an example &raquo; <SupportIcon supportItemKey="ccr4w" />
        </p>
      </div>
    );
  }
}

export default App;
