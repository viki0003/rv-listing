import React from "react";
import "./header.css";
import Logo from "../../../Assets/Images/Home/RVLogo.png";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <nav>
          <ul className="nav-list">
            <li>
              <a href="/">Shop By Category</a>
            </li>
            <li>
              <a href="/about">Deals & Services</a>
            </li>
            <li>
              <a href="/services">Find A Store</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
