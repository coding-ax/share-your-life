import React, { useState } from "react";
// 路由
import { withRouter } from "react-router";
import { renderRoutes } from "react-router-config";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import find from "../../assets/iconfont/Main/find.png";
import find_active from "../../assets/iconfont/Main/find_active.png";
//图片
import home from "../../assets/iconfont/Main/home.png";
import home_active from "../../assets/iconfont/Main/home_active.png";
import message from "../../assets/iconfont/Main/message.png";
import message_active from "../../assets/iconfont/Main/message_active.png";
import profile from "../../assets/iconfont/Main/profile.png";
import profile_active from "../../assets/iconfont/Main/profile_active.png";
//自定义组件
import AnimationGo from "../../components/common/AnimationGo";
import { KeepAlive } from "react-activation";
//css
import "./index.css";

function Main(props) {
  console.log(props);
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
  // 根据路由判断活跃 修复刷新bug
  let active = props.location.pathname;
  for (let item of TabBarMessage) {
    // 初次进入时候为/main 然后再redirect到/main/home,props没有更新
    if (active === "/main") {
      active = 1;
      break;
    }
    if (active === item.route) {
      active = item.id;
      break;
    }
  }
  const [activeIndex, setActiveIndex] = useState(active);

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
            className="tabbar-item-small"
            key={item.id}
            src={item.id === activeIndex ? item.imgSrcActive : item.imgSrc}
            alt=""
          />
        </div>
      </NavLink>
    );
  });
  // console.log(props);

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
