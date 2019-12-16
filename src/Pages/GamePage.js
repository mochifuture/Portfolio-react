import React from "react";
import "./TopPage.css";
import "./GamePage.css";
import { withRouter } from "react-router";
import takarabako from "../Images/takarabako.mp4";
import moicha from "../Images/moi_issho.mp4";
import minimoi from "../Images/minimoi_1280.mp4";

class GamePage extends React.Component {
  render() {
    return (
    <div>
      <div className="games">
          <h3>モイちゃんといっしょ</h3>
          <p>モルモットのモイちゃんといっしょに暮らしましょう！</p>
          <p>放置・クリッカーゲーム。開発中です。</p>
          <video src={moicha} height="400" controls></video>
      </div>

      <div className="games">
          <h3>モイちゃんのりんごキャッチ！</h3>
          <p>かわいいモルモットのモイちゃんを操作してりんごをキャッチしましょう！</p>
          <video src={minimoi} width="400" height="300" controls></video>
          <p><a href="https://unityroom.com/games/minimoichan">あそぶ→　unityroom</a></p>
      </div>

      <div className="games">
      <h3>モイちゃんのたからばこ</h3>
      <p>たからばこを、さがしてね！ダンジョンゲームです</p>
        <video src={takarabako} width="350" height="350" controls></video>
        <p><a href="https://unityroom.com/games/moichang_takarabako">あそぶ→　unityroom</a></p>
      </div>

    </div>
    );
  }
}

export default withRouter(GamePage);
