import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <nav className="footer">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/product" className="contact">
        <li>
          <a href="https://example.com">My GH</a>
        </li>
        <li>
          <a href="mailto:m.bluth@example.com">LinkedIn</a>
        </li>
        <li>
          <a href="tel:+123456789">twiter</a>
        </li>
      </Link>
      <Link to="./pdf/test.pdf" target="_blank" download>
        <li>
          Download <br />
          CV PDF
        </li>
      </Link>
    </nav>
  );
};

export default Footer;
