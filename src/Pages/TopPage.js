import React from "react";
import "./TopPage.css";
import { withRouter } from "react-router";
import unii_500 from "../Images/unii_500.jpg";

class TopPage extends React.Component {
  render() {
    return (
      <div className="TopPage">
        <div className="iframes">
          <div className="flexcontents">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/hxrKJ9l7-Wg?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="flexcontents">
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/69345498" width="560" height="315" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div className="iframes">
          <div className="flexcontents">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/hxrKJ9l7-Wg?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="flexcontents">
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/127412224?title=0&byline=0&portrait=0" width="560" height="315" frameborder="0" allowfullscreen></iframe>
          </div>
          <div className="flexcontents">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dtYBEH6MZYE?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="flexcontents">
            <iframe src="https://player.vimeo.com/video/69345498?title=0&byline=0&portrait=0" width="560" height="315" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          </div>
        </div>
        <div className="sounds">
          <div className="iframes">
            <div className="flexcontents">
              <iframe className="bandcampiframes" src="https://bandcamp.com/EmbeddedPlayer/album=3551376568/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/" seamless><a href="http://elegantdisc.bandcamp.com/album/--3">ニュー世界、海と　君の瞳 by unii</a></iframe>
            </div>
            <div className="flexcontents">
              <iframe className="bandcampiframes" src="https://bandcamp.com/EmbeddedPlayer/album=3221283149/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/track=2055578461/transparent=true/" seamless><a href="http://northernlightss.bandcamp.com/album/long-scene-before-sunset">Long scene,before sunset by unii</a></iframe>
            </div>
            <div className="flexcontents">
              <iframe className="bandcampiframes" src="https://bandcamp.com/EmbeddedPlayer/album=925013865/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/track=1720647107/transparent=true/" seamless><a href="http://northernlightss.bandcamp.com/album/poet-from-the-northern-sea">Poet from the northern sea by unii</a></iframe>
            </div>
          </div>
        </div>
        <article>
          <img src={unii_500} alt="unii" />
          <p>unii</p>
          <p>
          Unii is a singer, songwriter, electronic music composer (ambient, avant-garde pop)
           from Northern island of Sapporo city, Hokkaido,
           Japan.  Her soft yet powerful voice mixed with
           electronic sound invites you to the artistic world
           of hers. Unii has been performing live not only in
           Japan but overseas in Europe and Asia, such as
           Singapore, Vietnam and China. Her music is accepted
           positively borderless-ly and her style is described
           as post Bjork that it floats us into dream-like
           soundscape.</p>
          <p>
           Unii released her first album“New world,
           sea and your eyes" (2011, elegantdisc) which
           she did all the creation work from recording
           to songwriting. The second album “Long scene,
           before sunset” was released from her own
           label Nothernlights in August of 2014.
           Unii’s creation is fresh and she is
           pioneering her own style of music.
          </p>
        </article>
      </div>
    );
  }
}

export default withRouter(TopPage);
