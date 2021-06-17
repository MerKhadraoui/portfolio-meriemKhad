import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
const AboutMe = () => {
  const listIcon = <FontAwesomeIcon icon={faMapPin} />;
  const text = "About Me";
  const testToArr = text.split("").map((char, i) => (
    <div className="words">
      <li key={i}>
        {/* <input type="checkbox" /> */}
        <span>{char}</span>
      </li>
    </div>
  ));
  return (
    <div className="about">
      <img src="" />
      <ul className="about-text">
        <h1>{testToArr} </h1>
      </ul>
      <h2>{listIcon} my biggest strengths</h2>
      <p>
        <h3> {listIcon} UX advocacy & relationship building</h3> Through
        facilitated workshops & intentional conversations, I help teams
        understand the value of UX, build a strong emotional connection to
        users, and work together towards a high-value solutions.
        <h3>{listIcon} Finding signal v. noise </h3>I love getting immersed in
        user interviews, finding patterns, problems, & opportunities. I enjoy
        working with PM and engineering teammates to narrow down the key
        business questions we need to answer, and how we can address those
        questions through a variety of discovery methods.
        <h3>{listIcon} Systems thinking</h3> I love understanding how team &
        user outcomes are often the function of multiple variables. I like
        thinking through problems at the system level, project level, and
        individual level before arriving at potential solutions.{" "}
        <h3>{listIcon} Creating lightweight processes that work for teams</h3> I
        like to show my work and the work of my team. I enjoy finding tools and
        easy processes that allow teams to work faster and more joyfully. I am
        allergic to copying and pasting.
      </p>
      <h2>{listIcon} Education</h2>
      <p>
        {" "}
        <h3>{listIcon} 2009 – 2013</h3>
        Khenchela University (Algeria) Bachelor of Science: agricultural science
        <br></br>
        The diploma is based on a mix of different courses, Research and
        practical work, Coursework including Genetic Bioinformatics( DaTa
        base...) Honoret with excellent Student Scholarchip
        <h3>{listIcon} 2013 – 2015</h3>
        Khenchela University (Algeria) Master of Science: Biotechnology and
        vegetables
        <h3>{listIcon} 2020-2022</h3>
        Germany Digital Career Institut (DCI): further training in web
        development<br></br> During my studies at the institute, I was able to
        learn many programs by attending theory and practice at the same time,
        which contributed to my understanding of most of the programs... In
        addition to my constant desire to learn more, my study at this institute
        opened new horizons for discovery and other studies before me even after
        Study period ends
      </p>
    </div>
  );
};
export default AboutMe;
