import React from "react";
import { withRouter } from "react-router";
function Message(props) {
  return <div>message</div>;
}
export default React.memo(withRouter(Message));
