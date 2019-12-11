import React from "react";
import './App.css';
import { Link, Route } from "react-router-dom";
import Button from "./Components/Button";
import logo from "./Images/moi3d.png";
import Menu from "./Menu";
import AnchorLink from 'react-anchor-link-smooth-scroll';

function App() {
  return (
    <div className="App">
      <header className="App-header" id="top">
        <img src={logo} className="App-logo" alt="logo" />
          Yuiko Kaneko
        <AnchorLink href="#menu" offset="50">
          <Button name="music" content="/" />
        </AnchorLink>
        <AnchorLink href="#games" offset="50">
          <Button name="games" content="/" />
        </AnchorLink>
        <AnchorLink href="#others" offset="50">
          <Button name="others" content="/" />
        </AnchorLink>
      </header>
      <div className="Main" id="menu">
        <Menu/>
      </div>
      <div className="Main" id="games">
        games
      </div>
      <div className="Main" id="others">
        others
      </div>
      <footer className="App-footer"><AnchorLink href="#top" offset="50">上部へ移動</AnchorLink></footer>
    </div>
  );
}

export default App;
