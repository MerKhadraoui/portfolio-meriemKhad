import React from "react";
import { Slide } from "react-slideshow-image";
import Img from "./img.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import MediaQuery from "react-responsive";

const Home = () => {
  const came = <FontAwesomeIcon icon={faCameraRetro} />;

  return (
    <div className="home">
      <div>
        <h1 className="main-page">
          Hi ! I'm Meriem Khadraoui, a Junior web developer
        </h1>
      </div>
      <div className="line"></div>
      <div>
        <h2>From my gallery {came} </h2>

        <div className="img-slider">
          <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
            <ul>
              {" "}
              <Slide>
                {Img.map((obj) => (
                  <li key={obj.id}>
                    {" "}
                    <img
                      className="my-img"
                      src={`${process.env.PUBLIC_URL}/${obj.img}`}
                      alt="image"
                      height="550"
                    />
                  </li>
                ))}
              </Slide>
            </ul>
          </MediaQuery>
        </div>
      </div>
    </div>
  );
};
export default Home;
