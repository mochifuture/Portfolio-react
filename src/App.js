import React from "react";
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Button from "./Components/Button";
import logo from "./Images/moi3d.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import TopPage from "./Pages/TopPage";
import GamePage from "./Pages/GamePage";
import OthersPage from "./Pages/OthersPage";

function App() {
  return (
    <div className="App">

      <Router>
        <header className="App-header" id="top">
          <img src={logo} className="App-logo" alt="logo" />
            Yuiko Kaneko Works
          <AnchorLink href="#main" offset="50">
            <Link to='/'><Button name="music"/></Link>
            <Link to='/games'><Button name="games"/></Link>
            <Link to='/others'><Button name="others"/></Link>
          </AnchorLink>
        </header>

        <div className="Main">
            <div className="App-main" id="main">
                <div>
                    <Switch>
                        <Route path='/' exact component={TopPage}/>
                        <Route path='/games' exact component={GamePage}/>
                        <Route path='/others' exact component={OthersPage}/>
                        <Route exact component={TopPage}/>
                    </Switch>
                </div>
            </div>
        </div>
      </Router>

      <footer className="App-footer"><AnchorLink href="#top" offset="50">Back To Top</AnchorLink></footer>
    </div>
  );
}

export default App;
