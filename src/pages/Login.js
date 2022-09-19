import { Link } from "react-router-dom";

import "../css/Login.css";

const Login = () => {

  return (
    <>
      <div className="login-container">
        <div className="login-wrapper">
          <p className="login-title">Login to my account</p>
          <p>Enter your e-mail and password</p>
          <form action="#">
            <input className="login-input" type="email" placeholder="    Email" />
            <input className="login-input" type="password" placeholder="   Password" />
            <button className="button-link-style" id="login-button" type="submit">Login</button>
          </form>
          <p className="dont-have-account">
            Don't have account yet? <Link id="create-account" to="/register"> Create Account</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
