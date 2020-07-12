import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Switch, useLocation, Route } from "react-router-dom";
import "./index.css";

/**
 *
 * @param {way} props
 * @description 用于页面路由跳转 通过way指定跳转方式，指定way=refade
 * 则反向
 *
 */

function AnimationGo(props) {
  const { children } = props;
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            timeout={500}
            classNames={props.way || "fade"}
            key={location.key}
          >
            <Switch location={location}>{children}</Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    ></Route>
  );
}

export default AnimationGo;
