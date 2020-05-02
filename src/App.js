import React, { useState, useEffect } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/Navbar";
import ContentContainer from "./components/ContentContainer";
import SectionControls from "./components/SectionControls";
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
          <p>this will be a modal at some point #TODO</p>
          <SectionControls />
        </div>
      </div>
      <div className="row"></div>
    </div>
  );
}

export default App;
