import React, { Component } from "react";
import axios from "axios";
import "../css/Register.css";
import { Link } from "react-router-dom";
import { Tabtitle } from "../components/GeneralFunctions";

export default class Signup extends Component {
  userData;
  constructor(props) {
    super(props);
    this.state = {
      signupData: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        isLoading: "",
      },
      msg: "",
    };
  }

  onChangehandler = (e, key) => {
    const { signupData } = this.state;
    signupData[e.target.name] = e.target.value;
    this.setState({ signupData });
  };
  onSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    axios
      .post("http://127.0.0.1:8000/api/customer-signup", this.state.signupData)
      .then((response) => {
        this.setState({ isLoading: false });

        if (response.data.status === 200) {
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("customerLoggedIn", true);
          localStorage.setItem("userData", JSON.stringify(response.data.data));

          this.setState({
            msg: response.data.message,
            signupData: {
              firstname: "",
              lastname: "",
              email: "",
              password: "",
            },
          });
          setTimeout(() => {
            this.setState({ msg: "" });
            window.location.href = "/dashboard/ownerprofiledashboard";
          }, 2000);
        }

        if (response.data.status === "failed") {
          this.setState({ msg: response.data.message });
          setTimeout(() => {
            this.setState({ msg: "" });
          }, 10000);
        }
      });
  };

  render() {
    Tabtitle("Register | Charming Pets");
    const isLoading = this.state.isLoading;
    return (
      <>
        <div className="login-container">
          <div className="login-wrapper">
            <p className="login-title">Create Account</p>
            <p>Please fill in the information below</p>
            <form action="#">
              <input
                className="login-input"
                type="text"
                placeholder="    First Name"
                name="firstname"
                value={this.state.signupData.firstname}
                onChange={this.onChangehandler}
              />
              <input
                className="login-input"
                type="text"
                placeholder="    Last Name"
                name="lastname"
                value={this.state.signupData.lastname}
                onChange={this.onChangehandler}
              />
              <input
                className="login-input"
                type="emal"
                placeholder="    Email"
                name="email"
                value={this.state.signupData.email}
                onChange={this.onChangehandler}
              />
              <input
                className="login-input"
                type="password"
                placeholder="   Password"
                name="password"
                value={this.state.signupData.password}
                onChange={this.onChangehandler}
              />
              <button
                className="button-link-style"
                id="login-button"
                type="button"
                onClick={this.onSubmitHandler}
              >
                Register{" "}
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
            </form>
            <p className="dont-have-account">
              Already have an account?{" "}
              <Link id="create-account" to="/login">
                Login here.
              </Link>
            </p>
          </div>
        </div>
      </>
    );
  }
}
