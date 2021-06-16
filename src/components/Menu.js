import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <nav className="menu">
      <div className="logo">
        <Link to="/">
          <h1>M</h1>
        </Link>
      </div>

      <Link to="/work">
        <li>My Work</li>
      </Link>
      <Link to="/skills">
        <li>Skills</li>
      </Link>
      <Link to="/aboutme">
        <li>About me </li>
      </Link>
    </nav>
  );
};

export default Menu;
