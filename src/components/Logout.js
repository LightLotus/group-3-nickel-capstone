import React, { Component } from "react";
import { Navigate } from "react-router-dom";

export default class Logout extends Component {
  state = {
    navigate: false,
  };

  onLogoutHandler = () => {
    localStorage.clear();
    this.setState({
      navigate: true,
    });
  };
  render() {
    const user = JSON.parse(localStorage.getItem("userData"));
    const { navigate } = this.state;
    if (navigate) {
      window.location.href = "/";
    }
    return (
      <>
        <a className="navlinks-a" href="#" onClick={this.onLogoutHandler}>
          Logout
        </a>
      </>
    );
  }
}
