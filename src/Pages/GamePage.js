import React from "react";
import "./TopPage.css";
import "./GamePage.css";
import { withRouter } from "react-router";
import takarabako from "../Images/takarabako.mp4";
import moicha from "../Images/moi_issho.mp4";
import minimoi from "../Images/minimoi_1280.mp4";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/container';
import appstore from "../Images/App_Store_Badge_JP_blk.png";
import googleplay from "../Images/google-play-badge.png";

class GamePage extends React.Component {
  render() {
    return (
      <Container maxWidth="md">
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <div className="games">
                <h3>モイちゃんといっしょ</h3>
                <video src={moicha} width="350" controls></video>
                <p>癒しのモルモット育成ゲームです</p>
                <p>クリックするごとにモイちゃんとのしんらいレベルがアップ！</p>
                <p>なでたり、餌をあげたり、お掃除をしてコミュニケーションを深められます。</p>
                <div className="appstore-badges">
                  <a href="https://apps.apple.com/jp/app/id1493900117"><img src={appstore} alt="nort05" width="150"/></a>
                  <a href="https://play.google.com/store/apps/details?id=com.MoichangCompany.mob"><img src={googleplay} alt="nort05" width="170"/></a>
                </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="games">
                <h3>モイちゃんのりんごキャッチ！</h3>
                <p>かわいいモルモットのモイちゃんを操作してりんごをキャッチしましょう！</p>
                <video src={minimoi} width="350" height="300" controls></video>
                <p><a href="https://unityroom.com/games/minimoichan">あそぶ→　unityroom</a></p>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="games">
            <h3>モイちゃんのたからばこ</h3>
            <p>たからばこを、さがしてね！ダンジョンゲームです</p>
              <video src={takarabako} width="350" height="350" controls></video>
              <p><a href="https://unityroom.com/games/moichang_takarabako">あそぶ→　unityroom</a></p>
            </div>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withRouter(GamePage);
