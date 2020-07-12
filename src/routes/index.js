import React from "react";
import { Redirect } from "react-router-dom";

import Test from "../views/Test";
import Begin from "../views/Begin";
import Main from "../views/Main";
import Login from "../views/Login";

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
  },
  // 用于测试自定义组件
  {
    path: '/test',
    component:Test
  },
];
