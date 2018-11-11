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

    const navList = [1,2,3,4].map((num) => 
      <li key={num.toString()} className={this.state.activeSection == num ? 'active' : ''}>
        <button type="button" onClick={this.handleClick} value={num}>{num}</button>
      </li>
    );

    return (
      <nav className={'Nav Section-'+this.state.activeSection}>
        <ul className={'NavList Section-'+this.state.activeSection}>
          {navList}
        </ul>
      </nav>
    );
  }
}

export default hot(module)(Nav);