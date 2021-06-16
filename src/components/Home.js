import React from "react";
import { Slide, Fade } from "react-slideshow-image";
import Img from "./img.json";
const Home = () => {
  console.log(Img);

  return (
    <div className="home">
      <h1 className="main-page">
        Hi ! I'm Meriem Khadraoui, a Junior web developer
      </h1>

      <div className="img-slider">
        <ul>
          {" "}
          <Slide>
            {Img.map((obj) => (
              <li key={obj.id}>
                {" "}
                <img
                  className="my-img"
                  src={`${process.env.PUBLIC_URL}/${obj.img}`}
                />
              </li>
            ))}
          </Slide>
        </ul>
      </div>
    </div>
  );
};
export default Home;
