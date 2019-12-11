import React from "react";
import './App.css';
// import { Link, Route } from "react-router-dom";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Button from "./Components/Button";
import logo from "./Images/moi3d.png";
// import Menu from "./Menu";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import TopPage from "./Pages/TopPage";
import GamePage from "./Pages/GamePage";

const page2 = () => <div><h1>others</h1>その他のページです</div>

function App() {
  return (
    <div className="App">

      <Router>
        <header className="App-header" id="top">
          <img src={logo} className="App-logo" alt="logo" />
            Yuiko Kaneko
          <AnchorLink href="#main" offset="50">
            <Link to='/'><Button name="music"/></Link>
            <Link to='/page1'>
              <Button name="games"/>
            </Link>
            <Link to='/page2'>
              <Button name="others"/>
            </Link>
          </AnchorLink>
        </header>

        <div className="Main">
            <div className="App-main" id="main">
                <div>
                    <Switch>
                        <Route path='/' exact component={TopPage}/>
                        <Route path='/page1' exact component={GamePage}/>
                        <Route path='/page2' exact component={page2}/>
                        <Route exact component={TopPage}/>
                    </Switch>
                </div>
            </div>
        </div>
      </Router>

      <footer className="App-footer"><AnchorLink href="#top" offset="50">上部へ移動</AnchorLink></footer>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header" id="top">
//         <img src={logo} className="App-logo" alt="logo" />
//           Yuiko Kaneko
//         <AnchorLink href="#menu" offset="50">
//           <Button name="music" content="/" />
//         </AnchorLink>
//         <AnchorLink href="#games" offset="50">
//           <Button name="games" content="/" />
//         </AnchorLink>
//         <AnchorLink href="#others" offset="50">
//           <Button name="others" content="/" />
//         </AnchorLink>
//       </header>
//       <div className="Main" id="menu">
//         <Menu/>
//       </div>
//       <div className="Main" id="games">
//         games
//       </div>
//       <div className="Main" id="others">
//         others
//       </div>
//       <footer className="App-footer"><AnchorLink href="#top" offset="50">上部へ移動</AnchorLink></footer>
//     </div>
//   );
// }
//
// export default App;
