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

      <li>
        {" "}
        <a href="miyakhad@gmail.com">{email} e-mail</a>
      </li>
      {/* </Link> */}
      <Link to="./pdf/test.pdf" target="_blank" download>
        <li> CV PDF{pdf}</li>
      </Link>
    </nav>
  );
};

export default Footer;
