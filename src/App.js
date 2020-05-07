import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/Navbar";
import Quiz from "./components/Quiz";
import Study from "./components/Study";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar studyLink="/study" quizLink="/quiz" />
        <header className="App-header"></header>
        <Route path="/study" component={Study} />
        <Route path="/quiz" component={Quiz} />
      </div>
    </Router>
  );
}

export default App;
