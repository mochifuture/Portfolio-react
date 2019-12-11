import React from "react";
import "./TopPage.css";
import "./GamePage.css";
import { withRouter } from "react-router";
import takarabako from "../Images/takarabako.mp4";
import moicha from "../Images/moicha.mp4";

class GamePage extends React.Component {
  render() {
    return (
    <div>
      <div className="games">
        <div className="contents-games">
          <video src={moicha} height="400" controls></video>
          <div className="games-article">
          <h3>モイちゃんといっしょ</h3>
          <p>モルモットのモイちゃんといっしょに暮らしましょう！開発中です</p>
          </div>
        </div>
      </div>
      <div className="games">
        <div className="contents-games">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/w0mm8CMdAGM?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div className="games-article">
          <h3>モイちゃんのりんごキャッチ！</h3>
          <p>かわいいモルモットのモイちゃんを操作してりんごをキャッチしましょう！</p>
          <a href="https://unityroom.com/games/minimoichan">あそぶ→　unityroom</a>
          </div>
        </div>
      </div>
      <div className="games">
      <div className="contents-games">
        <video src={takarabako} width="350" height="350" controls></video>
        <div className="games-article">
        <h3>モイちゃんのたからばこ</h3>
        <p>たからばこを、さがしてね！ダンジョンゲームです</p>
        <a href="https://unityroom.com/games/moichang_takarabako">あそぶ→　unityroom</a>
        </div>
        </div>
      </div>
    </div>
    );
  }
}

export default withRouter(GamePage);
