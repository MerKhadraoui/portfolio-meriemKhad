import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";
const Menu = () => {
  const workIcon = <FontAwesomeIcon icon={faBriefcase} />;
  const star = <FontAwesomeIcon icon={faStar} />;
  const bookReader = <FontAwesomeIcon icon={faBookReader} />;
  return (
    <nav className="menu">
      <div className="logo">
        <Link to="/">
          <h1>M</h1>
        </Link>
      </div>

      <Link to="/work">
        <li> {workIcon} My Work</li>
      </Link>
      <Link to="/skills">
        <li>{star} Skills</li>
      </Link>
      <Link to="/aboutme">
        <li>{bookReader} About me </li>
      </Link>
    </nav>
  );
};

export default Menu;
