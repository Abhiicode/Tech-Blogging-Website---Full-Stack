import React from "react";
import "./Login.css";
//best website
const Login = () => {
  return (
    <div className="main-container">
      <div className="left-container">
        <img
          id="loginImage"
          src="../../../Images/login-signup.jpg"
          alt="loginImage"
        />
      </div>
      <div className="right-container">
        <h1 id="login-heading">Log In to Our Application</h1>
        <p id="login-para">
          Welcome back! login with your data that you entered during
          registration
        </p>
        <button id="google-btn">
          <img
            src="../../../Images/googleLogo.png"
            alt="googleLogo"
            id="google-logo"
          />
          Login with Google
        </button>
        <button id="github-btn">
          <img
            id="github-logo"
            src="../../../Images/githubLogo.png"
            alt="github btn"
          />
          Login with Github
        </button>
        <h3 id="or-line">or</h3>
        <div className="auth-container">
          <label for="uname">
            <b className="label-name">Username</b>
          </label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter Username"
            name="uname"
            required
          />

          <label for="psw">
            <b className="label-name">Password</b>
          </label>
          <input
            className="input-field"
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <label>
            <input type="checkbox" name="remember" /> Remember me
          </label>

          <div className="forgot-password-container">
            <h4 id="forgot-id">Forgot your Password?</h4>
          </div>
          <button class="button-40" role="button">
            Login Here
          </button>
          <p>
            Dont't have an account?{" "}
            <span id="registerId">
              <strong>Register</strong>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
