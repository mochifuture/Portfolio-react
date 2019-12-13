import React from "react";
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Button from "./Components/Button";
import logo from "./Images/moi3d.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import TopPage from "./Pages/TopPage";
import GamePage from "./Pages/GamePage";
import OthersPage from "./Pages/OthersPage";
import ButtonPageTop from "./Components/ButtonPageTop";
import IconF from "./Icons/icon_f.png";
import IconG from "./Icons/icon_g.png";
import IconQ from "./Icons/icon_q.png";
import IconT from "./Icons/icon_t.png";
import IconY from "./Icons/icon_y.png";

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
          <div className="icons-container">
            <a href="https://www.facebook.com/unii.jp" target="_blank"><img src={IconF} className="icons" alt="facebook" /></a>
            <a href="https://twitter.com/mochifuture" target="_blank"><img src={IconT} className="icons" alt="twitter" /></a>
            <a href="https://github.com/mochifuture" target="_blank"><img src={IconG} className="icons" alt="github" /></a>
            <a href="https://qiita.com/mochifuture" target="_blank"><img src={IconQ} className="icons" alt="qiita" /></a>
            <a href="https://www.youtube.com/channel/UCamI3MqarC-5TpYD8pLZcCg" target="_blank"><img src={IconY} className="icons-y" alt="youtube" /></a>
          </div>
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

      <footer className="App-footer"><AnchorLink href="#top" offset="50"><ButtonPageTop name="Top"/></AnchorLink></footer>
    </div>
  );
}

export default App;
