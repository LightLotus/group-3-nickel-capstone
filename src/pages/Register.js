import "../css/Register.css";
import { Link } from "react-router-dom";

const Register = () => {
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
            />
            <input
              className="login-input"
              type="text"
              placeholder="    Last Name"
            />
            <input
              className="login-input"
              type="emal"
              placeholder="    Email"
            />
            <input
              className="login-input"
              type="password"
              placeholder="   Password"
            />
            <button
              className="button-link-style"
              id="login-button"
              type="submit"
            >
              Login
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
};

export default Register;
