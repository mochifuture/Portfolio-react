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
