//navigation bar
import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">FFXIV Memory Game</a>
        <ul class="nav justify-content-center">
          <li>
            <span className="text-light">{this.props.status}</span>
          </li>
        </ul>
        <span className="navbar-text">
          <span className='scoreText'> Score: {this.props.score}</span>
        </span>
      </div>
      </nav>
    );
  }
}

export default Nav;