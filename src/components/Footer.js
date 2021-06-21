import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const github = <FontAwesomeIcon icon={faCat} />;
  const linked = <FontAwesomeIcon icon={faLink} />;
  const email = <FontAwesomeIcon icon={faPaperPlane} />;
  const pdf = <FontAwesomeIcon icon={faCloudDownloadAlt} />;
  const year = new Date().getFullYear();
  return (
    <nav className="footer">
      <Link to="/">
        <li>Home</li>
      </Link>
      {/* <Link to="/product" className="contact"> */}
      <li>
        {" "}
        <a href="https://github.com/MerKhadraoui"> {github} My GH</a>
      </li>

      <li>
        {" "}
        <a href="https://www.linkedin.com/in/meriem-khadraoui-a93b24107/">
          {linked} LinkedIn{" "}
        </a>
      </li>
      <Link to="/ContactForm">
        <li>{email} e-mail</li>
      </Link>
      {/* <li>
        {" "}
        <a href="miyakhad@gmail.com">e-mail</a>
      </li> */}
      {/* </Link> */}
      <Link to="./pdf/miyakhad-cv.pdf" target="_blank" download>
        <li> CV PDF{pdf}</li>
      </Link>
      <div>
        <h4 className="year">create by Meriem Khadraoui {year} </h4>
        <h4 className="email">miyakhad@gmail.com</h4>{" "}
      </div>
    </nav>
  );
};

export default Footer;
