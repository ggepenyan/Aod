import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.png";

const Header = () =>
  <header>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-10">
          <div className="d-flex flex-wrap align-items-center">
            <div className="brand d-flex flex-wrap align-items-center">
              <div className="logo-bg round-corners d-flex align-items-center justify-content-center">
                <img src={logo} alt="website logo"/>
              </div>
              <h1 className="brand-name h4">Lorem ipsum dolor</h1>
            </div>
            <nav className="main-nav">
              <ul className="d-flex align-items-center">
                <li>
                  <Link to="/">nav link</Link>
                </li>
                <li>
                  <Link to="/">nav link</Link>
                </li>
                <li>
                  <Link to="/">nav link</Link>
                </li>
                <li>
                  <Link to="/">nav link</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="col-md-2">
          <div className="user-image round-corners d-flex align-items-center justify-content-center">
            <img src="http://i.pravatar.cc/300" alt="website logo"/>
          </div>
        </div>
      </div>
    </div>
  </header>;

export default Header;
