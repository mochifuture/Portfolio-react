import React from "react";
import './StampDisplayComponent.css';
import stamp01_1 from "../Images/stamp01_1.png";
import stamp01_2 from "../Images/stamp01_2.png";

function StampDisplayComponent() {
  return (
    <div>
      <div className="stamps">
        <a href="https://store.line.me/stickershop/product/4661496/ja?from=sticker"><img src={stamp01_1} alt="linestamp" className="img-stamp"/></a>
      </div>
    </div>
  );
}

export default StampDisplayComponent;
