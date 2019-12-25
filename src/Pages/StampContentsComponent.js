import React from "react";
import './StampContentsComponent.css';
import stamp01_1 from "../Images/stamp01_1.png";
import stamp01_2 from "../Images/stamp01_2.png";
import stamp01_3 from "../Images/stamp02_1.png";
import stamp01_4 from "../Images/stamp02_2.png";

class StampContentsComponent extends React.Component {
  render() {
    return (
    <div className="contents-container">
      <div className="img-block">
        <a href="https://store.line.me/stickershop/product/4661496/ja?from=sticker"><img src={stamp01_1} alt="linestamp" className="img-stamp"/></a>
      </div>
      <div className="img-block">
        <a href="https://store.line.me/stickershop/product/4661496/ja?from=sticker"><img src={stamp01_2} alt="linestamp" className="img-stamp"/></a>
      </div>
      <div className="img-block">
        <a href="https://store.line.me/stickershop/product/4661496/ja?from=sticker"><img src={stamp01_3} alt="linestamp" className="img-stamp"/></a>
      </div>
      <div className="img-block" id="hoge">
        <a href="https://store.line.me/stickershop/product/4661496/ja?from=sticker"><img src={stamp01_4} alt="linestamp" className="img-stamp"/></a>
      </div>
    </div>
  );
}
}

export default StampContentsComponent;
