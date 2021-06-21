import React from "react";
import { Slide, Fade } from "react-slideshow-image";
import Img from "./img.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import MediaQuery from "react-responsive";

const Home = () => {
  console.log(Img);
  const came = <FontAwesomeIcon icon={faCameraRetro} />;

  return (
    <div className="home">
      <div>
        <h1 className="main-page">
          Hi ! I'm Meriem Khadraoui, a Junior web developer
        </h1>
      </div>

      <div>
        <h2>From my gallery {came} </h2>
        <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
          <ul className="img-slider">
            {" "}
            <Slide>
              {Img.map((obj) => (
                <li key={obj.id}>
                  {" "}
                  <img
                    className="my-img"
                    src={`${process.env.PUBLIC_URL}/${obj.img}`}
                    width="193"
                    height="130"
                  />
                </li>
              ))}
            </Slide>
          </ul>
        </MediaQuery>
      </div>
    </div>
  );
};
export default Home;
