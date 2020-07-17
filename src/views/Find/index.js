import React from "react";
import { withRouter } from "react-router";
import "./index.css"
function Find(props) {
  return <div className="find-container">Find</div>;
}
export default React.memo(withRouter(Find));
