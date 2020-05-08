import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/Navbar";
import Quiz from "./components/Quiz";
import Study from "./components/Study";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar studyLink="/study" quizLink="/quiz" />
        <header className="App-header"></header>
        <Switch>
          <Route path="/study" component={Study} />
          <Route path="/quiz" component={Quiz} />
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
