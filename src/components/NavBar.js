import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/index.css";

const Home = () => {
  return (
    <nav className="nav-wrapper nav">
      <div className="container">
        <Link to="/" className="brand-logo">
          Logo
        </Link>
        <ul className="right">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Home;
