import React from "react";
import "./header.css";
import Logo from "../../../Assets/Images/Home/RVLogo.png";
import { Link } from "react-router";
import SearchBar from "../../Home/SearchBar/SearchBar";

const Header = () => {
  return (
    <>
      <header className="home-header">
        <div className="container">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <div className="header-search-bar">
            <svg
              width="20"
              height="20"
              className="search-icon header-search"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 16.5L21 21"
                stroke="#323135"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19C14.9706 19 19 14.9706 19 10Z"
                stroke="#323135"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Search for an item"
              className="header-search-input"
            />
          </div>
          <nav>
            <ul className="nav-list">
              <li>
                <Link to="/products">Shop By Category</Link>
              </li>
              <li>
                <Link to="#">Deals & Services</Link>
              </li>
              <li>
                <Link to="#">Find A Store</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <span className="home-search-bar">
        <SearchBar />
      </span>
    </>
  );
};
export default Header;
