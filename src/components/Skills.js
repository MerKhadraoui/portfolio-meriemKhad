import React from "react";
import skillsData from "./skillsData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
const Skills = () => {
  const poitHand = <FontAwesomeIcon icon={faHandPointRight} />;
  const langueg = skillsData[0].languages.map((langu) => (
    <li>
      {poitHand} {langu}{" "}
    </li>
  ));

  const skillist = skillsData[0].programing.map((program) => (
    <li>
      {poitHand} {program}{" "}
    </li>
  ));
  return (
    <div className="skills">
      {" "}
      <div className="skill-word">
        <h1> Skills</h1>
      </div>{" "}
      <div>
        <h2>Programing</h2>
        <ul>{skillist} </ul>
      </div>
      <div>
        <h2>languages</h2>
        <ul>{langueg} </ul>
      </div>
    </div>
  );
};
export default Skills;
