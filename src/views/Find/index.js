import React, { useState, useRef } from "react";
import { withRouter } from "react-router";
import "./index.css";
import classnames from "classnames";
import Scroll from "../../components/common/Scroll";
import FindPic from "../../components/context/FindPic";
// 导入CSS
import "./index.css";
function Find(props) {
  const message = ["热门", "摄影", "人物", "风景", "动物", "抽象", "节日"];
  const [current, setCurrent] = useState(0);
  const navbar = message.map((item, index) => (
    <div
      className={classnames({
        "find-nav-bar-item": true,
        "find-nav-bar-active-item": current === index,
      })}
      onClick={() => {
        setCurrent(index);
      }}
    >
      {item}
    </div>
  ));

  const scroll = useRef();
  return (
    <div className="find-container">
      <div className="find-nav-bar-box">{navbar}</div>
      <div className="find-content">
        <FindPic />
      </div>
    </div>
  );
}
export default React.memo(withRouter(Find));
