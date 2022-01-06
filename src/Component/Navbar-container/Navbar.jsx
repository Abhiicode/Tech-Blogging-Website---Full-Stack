import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <div id="brand">
        <a id="anchor-main" href="/">
          <img id="nav-img" src="Images\bannerLogo.png" alt="logo" />
          <h4 className="logo-title">Tech-Blogs</h4>
        </a>
        <div className="navbar-section">
          <ul>
            <li>
              <a id="home" href="/">
                Home
              </a>
            </li>
            <li>
              <a id="products" href="/products">
                Products
              </a>
            </li>
            <li>
              <a id="technology" href="/technology">
                Technology
              </a>
            </li>
            <li>
              <a id="reports" href="/reports">
                Reports
              </a>
            </li>
          </ul>
        </div>
      </div>
      <nav>
        <ul>
          <li id="login">
            <Link to="/login">Login</Link>
          </li>
          <li id="signup">
            <a href="/signup">Signup</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
