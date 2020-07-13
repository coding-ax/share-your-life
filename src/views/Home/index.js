import React from "react";
import { withRouter } from "react-router";
function Home(props) {
  return <div>home</div>;
}
export default React.memo(withRouter(Home));
