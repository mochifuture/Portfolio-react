import React from "react";
import "./ButtonPageTop.css";
import { withRouter } from "react-router";

class ButtonPageTop extends React.Component {
  handleToPage = () => {
    this.props.history.push(this.props.content);
  };

  render() {
    return (
      <div
        className="ButtonPageTop"
        onClick={() => {
          this.handleToPage();
        }}
      >{this.props.name}
      </div>
    );
  }
}

export default withRouter(ButtonPageTop);
