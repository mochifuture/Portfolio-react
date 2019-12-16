import React from "react";
import "./TopPage.css";
import "./OthersPage.css";
import { withRouter } from "react-router";
import takarabako from "../Images/takarabako.mp4";
import nort01 from "../Images/nort.jpg";
import nort02 from "../Images/nort_01.jpg";
import nort03 from "../Images/nort_02.jpg";
import nort04 from "../Images/nort_04.jpg";
import nort05 from "../Images/nort_05.jpg";

class OthersPage extends React.Component {
  render() {
    return (
    <div>
      <div className="others">
        <div className="contents-others">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/qLLRKUej4l0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div className="contents-flex">
          <iframe width="280" height="150" src="https://www.youtube.com/embed/hcCJGpj_ymc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="280" height="150" src="https://www.youtube.com/embed/UN1eINVGS78" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <h3>Youtube</h3>
          <p>Unityエンジンの使い方を楽しくかんたんに紹介しています</p>
        </div>
      </div>

      <div className="others">
        <div className="contents-others">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/leP5b3fy69I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h3>モイちゃんのYoutube</h3>
          <p>モルモットのモイちゃんのYoutubeです</p>
        </div>
      </div>

      <div className="others">
        <div className="contents-others">
          <img src={nort04} alt="nort04" width="200"/>
          <img src={nort01} alt="nort01" width="200"/>
          <img src={nort05} alt="nort05" width="200"/><br/>
          <img src={nort02} alt="nort02" width="200"/>
          <img src={nort03} alt="nort03" width="200"/>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/0QolL4fYzEk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h3>アート・音楽イベント企画(2014-2016)</h3>
          <p>札幌市の公共空間などでイベントを複数回開催しました</p>
          <p>企画に携わった、フランス人アーティストJacques PerconteとSamuel Andreの映像・音楽インスタレーション作品"M"がSapporo*north2 AWARD ver.SIAF2014（札幌国際芸術祭）年間部門、表彰作品を受賞致しました</p>
          <p><a href="https://www.facebook.com/nortjp">FacebookPage</a></p>
        </div>
      </div>

    </div>
    );
  }
}

export default withRouter(OthersPage);
