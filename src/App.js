import React from "react";
// 导入router
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes";
// 导入自定义全局CSS
import "./normalize.css";
import "./globalStyle.css";
import AnimationGo from "./components/common/AnimationGo";

function App() {
  return (
    <div className="App">
      <Router>{renderRoutes(routes)}</Router>
    </div>
  );
}
// <AnimationGo></AnimationGo>;
export default App;
