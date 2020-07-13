import React from "react";
import { Redirect } from "react-router-dom";

import Test from "../views/Test";
import Begin from "../views/Begin";
import Main from "../views/Main";
import Login from "../views/Login";

// 子路由
import Home from "../views/Home";
import Find from "../views/Find";
import Message from "../views/Message";
import Profile from "../views/Profile";

export default [
  {
    path: "/",
    exact: true,
    component: Begin,
    // render: () => <Redirect to="/login" />,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/main",
    component: Main,
    children: [
      {
        path: "/main/",
        exact:true,
        render: () => <Redirect to="/main/home" />,
      },
      {
        path: "/main/home",
        component: Home,
      },
      {
        path: "/main/find",
        component: Find,
      },
      {
        path: "/main/message",
        component: Message,
      },
      {
        path: "/main/profile",
        component: Profile,
      },
    ],
  },
  // 用于测试自定义组件
  {
    path: "/test",
    component: Test,
  },
];
