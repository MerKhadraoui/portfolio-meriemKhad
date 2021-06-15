import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Work from "./components/Work";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Work" exact component={Work} />
        <Route path="/Skills" exact component={Skills} />
        <Route path="/AboutMe" exact component={AboutMe} />
      </Switch>
    </Router>
  );
}

export default App;
