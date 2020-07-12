import React from "react";
import "./index.css";

function LoginButton(props) {
  // 从props里面拿点击回调函数 handleClick,width backgroundColor text
  const { handleClick, width, backgroundColor, text } = props;
  const currentStyle = {
    width: width || "70%",
    backgroundColor: backgroundColor || "#101010",
  };
  return (
    <div
      className="button-box"
      style={currentStyle}
      onClick={() => {
        // 执行父组件方法
        handleClick();
      }}
    >
      {text}
    </div>
  );
}

export default React.memo(LoginButton);
