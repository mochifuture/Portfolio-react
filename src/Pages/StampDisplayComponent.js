import React from "react";
import './StampDisplayComponent.css';
import StampContentsComponent from "./StampContentsComponent.js";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from "../Components/Button";

class StampDisplayComponent extends React.Component {

  render() {
    return (
    <div className="stamp-display" >
      <div className="stamps">
        <StampContentsComponent />
      </div>
    </div>
  );
}
}

export default StampDisplayComponent;


// <div className="stamp-display" >
//   <div className="stamps">
//     <StampContentsComponent />
//   </div>
//   <div className="triangles">
//       <AnchorLink href="#hoge" offset="50">
//       <Button name="hoge"/>
//       </AnchorLink>
//       <div className="triangle1" onClick={() => {this.handleImg();}}>
//       </div>
//       <div className="triangle2">
//       </div>
//   </div>
// </div>
