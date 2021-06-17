import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Work from "./components/Work";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Data from "./data.json";
// import Image from "./img.json";
function App() {
  const galeryData = Data.map((obj) => (
    <li key={obj.id} className="GalaryFoto">
      <div>
        {" "}
        <img
          className="picture"
          src={`${process.env.PUBLIC_URL}/${obj.img}`}
          alt={obj.title}
        />
      </div>
      <div>
        {" "}
        <h2>{obj.title}</h2> <h3>{obj.text}</h3>
        <h4>{obj.techno} </h4>
        <a href={obj.link}>
          <button className="link-button">see more </button>{" "}
        </a>
      </div>
    </li>
  ));
  return (
    <Router>
      <Menu />

      <Switch>
        {" "}
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/" exact component={Home} />
        <Route path="/work" exact component={Work}>
          <div className="gallery-box">
            {" "}
            <ul className="gallery">{galeryData}</ul>
          </div>
          ;
        </Route>
        <Route path="/Skills" exact component={Skills} />
        <Route path="/AboutMe" exact component={AboutMe} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
