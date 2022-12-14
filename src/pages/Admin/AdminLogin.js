import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../css/Login.css";

export default class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      msg: "",
      isLoading: false,
      redirect: false,
      errMsgEmail: "",
      errMsgPwd: "",
      errMsg: "",
    };
  }
  onChangehandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let data = {};
    data[name] = value;
    this.setState(data);
  };

  onSignInHandler = () => {
    this.setState({ isLoading: true });
    axios
      .post("http://127.0.0.1:8000/api/user-login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        this.setState({ isLoading: false });
        if (response.data.status === 200) {
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("userData", JSON.stringify(response.data.data));
          this.setState({
            msg: response.data.message,
            redirect: true,
          });
        }
        if (
          response.data.status === "failed" &&
          response.data.success === undefined
        ) {
          this.setState({
            errMsgEmail: response.data.validation_error.email,
            errMsgPwd: response.data.validation_error.password,
          });
          setTimeout(() => {
            this.setState({ errMsgEmail: "", errMsgPwd: "" });
          }, 2000);
        } else if (
          response.data.status === "failed" &&
          response.data.success === false
        ) {
          this.setState({
            errMsg: response.data.message,
          });
          setTimeout(() => {
            this.setState({ errMsg: "" });
          }, 2000);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const login = localStorage.getItem("isLoggedIn");
    if (login) {
      window.location.href = "/mainadmin";
    }
    const isLoading = this.state.isLoading;

    return (
      <>
        <div className="login-container">
          <div className="login-wrapper">
            <p className="login-title">Login to admin</p>
            <p>Enter your e-mail and password</p>
            <form action="#">
              <input
                className="login-input"
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.onChangehandler}
              />
              <span className="text-danger">{this.state.msg}</span>
              <span className="text-danger">{this.state.errMsgEmail}</span>
              <input
                className="login-input"
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.onChangehandler}
              />
              <span className="text-danger">{this.state.errMsgPwd}</span>
              <button
                className="button-link-style"
                id="login-button"
                type="button"
                onClick={this.onSignInHandler}
              >
                Login{" "}
                {isLoading ? (
                  <span
                    className="spinner-border spinner-border-sm ml-5"
                    role="status"
                    aria-hidden="true"
                  ></span>
                ) : (
                  <span></span>
                )}
              </button>
              <p className="text-danger">{this.state.errMsg}</p>
            </form>
            <p className="dont-have-account">
              For Customer login{" "}
              <Link id="create-account" to="/login">
                {" "}
                click here
              </Link>
            </p>
          </div>
        </div>
      </>
    );
  }
}
