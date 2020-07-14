import React, { useState, useEffect } from "react";

// 路由
import { withRouter } from "react-router";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import routes from "../../routes";
import { renderRoutes } from "react-router-config";

//图片

import home from "../../assets/iconfont/Main/home.png";
import home_active from "../../assets/iconfont/Main/home_active.png";
import profile from "../../assets/iconfont/Main/profile.png";
import profile_active from "../../assets/iconfont/Main/profile_active.png";
import find from "../../assets/iconfont/Main/find.png";
import find_active from "../../assets/iconfont/Main/find_active.png";
import message from "../../assets/iconfont/Main/message.png";
import message_active from "../../assets/iconfont/Main/message_active.png";

//css
import "./index.css";
//自定义组件
import AnimationGo from "../../components/common/AnimationGo";

function Main(props) {
  const [activeIndex, setActiveIndex] = useState(1);

  let TabBarMessage = [
    {
      id: 1,
      imgSrc: home,
      imgSrcActive: home_active,
      route: "/main/home",
    },
    {
      id: 2,
      imgSrc: find,
      imgSrcActive: find_active,
      route: "/main/find",
    },
    {
      id: 3,
      imgSrc: message,
      imgSrcActive: message_active,
      route: "/main/message",
    },
    {
      id: 4,
      imgSrc: profile,
      imgSrcActive: profile_active,
      route: "/main/profile",
    },
  ];

  //tabbar构建
  let TabBar = TabBarMessage.map((item) => {
    return (
      <NavLink to={item.route} className="tab-bar-item">
        <div
          className="tab-item"
          onClick={() => {
            setActiveIndex(item.id);
          }}
        >
          <img
            key={item.id}
            src={item.id === activeIndex ? item.imgSrcActive : item.imgSrc}
            alt=""
          />
        </div>
      </NavLink>
    );
  });
  console.log(props);

  return (
    <div className="main-box">
      {/**主体 */}
      <Router>
        <div className="router-view">
          {/**以下为路由界面 */}
          <AnimationGo>{renderRoutes(props.route.children)}</AnimationGo>
        </div>
        {/* 以下为tabbar */}
        <div className="main-tab-bar">{TabBar}</div>
      </Router>
    </div>
  );
}
// 以memo形式导出
export default React.memo(withRouter(Main));
