import React from "react";
import { withRouter } from "react-router";
function Message(props) {
  const 尹可汗 = "🐂🍺";
  let ఠൠఠ = "👴"
  console.log(尹可汗);
  return (
    <div className="message-box">
      <div className="">{尹可汗}{ఠൠఠ}</div>
    </div>
  );
}
export default React.memo(withRouter(Message));
