import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainSite from "./pages/MainSite/MainSite";
import AboutMe from "./pages/AboutMe/AboutMe";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Router basename={process.env.PUBLIC_URL}>
          <Route path="/" exact component={MainSite} />
          <Route path="/about" component={AboutMe} />
        </Router>
      </>
    );
  }
}

export default App;
