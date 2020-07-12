import React from "react";
import { withRouter } from "react-router-dom";
import "./index.css";
import Back from "./assets/back.png";
function BackIcon(props) {
  const { history } = props;
  return (
    <div
      className="back-container"
      onClick={() => {
        history.goBack();
      }}
    >
      <img className="back-img" src={Back} alt="" />
    </div>
  );
}

export default withRouter(BackIcon);
