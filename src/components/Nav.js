import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./Nav.scss";

class Nav extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isToggleOn: true,
      num: 0,
      activeSection: 0
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let val = e.target.value;
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
      num: state.num + 1,
      activeSection: val
    }));
  }

  render() {
    return (
      <nav className={'Nav Section-'+this.state.activeSection}>
        <ul className={'NavList Section-'+this.state.activeSection}>
          <li className={this.state.activeSection == 1 ? 'active' : ''}>
            <button type="button" onClick={this.handleClick} value='1'>1</button>
          </li>
          <li className={this.state.activeSection == 2 ? 'active' : ''}>
            <button type="button" onClick={this.handleClick} value='2'>2</button>
          </li>
          <li className={this.state.activeSection == 3 ? 'active' : ''}>
            <button type="button" onClick={this.handleClick} value='3'>3</button>
          </li>
          <li className={this.state.activeSection == 4 ? 'active' : ''}>
            <button type="button" onClick={this.handleClick} value='4'>4</button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default hot(module)(Nav);