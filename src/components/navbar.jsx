import React, { Component } from "react";
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Task react app</span>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="login">
              Log in
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
