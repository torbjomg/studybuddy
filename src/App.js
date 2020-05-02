import React, { useState, useEffect } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/Navbar";
import ContentContainer from "./components/ContentContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header"></header>
      <div className="row">
        <div className="col-md-8">
          <ContentContainer />
        </div>
        <div className="col-md-4">
          <p>some text</p>
          <p>controls go here</p>
        </div>
      </div>
      <div className="row"></div>
    </div>
  );
}

export default App;
