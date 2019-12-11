import React from "react";
import "./TopPage.css";
import { withRouter } from "react-router";

class GamePage extends React.Component {
  render() {
    return (
    <div className="flex-container">
      <div className="flexcontents">
      <p>モイちゃんのりんごキャッチ！</p>
<p>かわいいモルモットのモイちゃんを操作してりんごをキャッチしましょう！</p>
<a href="https://unityroom.com/games/minimoichan">https://unityroom.com/games/minimoichan</a>
      </div>
      <div className="flexcontents">
      ゲーム紹介
      </div>
    </div>
    );
  }
}

export default withRouter(GamePage);
