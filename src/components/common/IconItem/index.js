import React from "react";
import "./index.css";

// handleClick 点击触发父组件方法
function IconItem(props) {
  const { handleClick } = props;
  const { imgSrc, text, color } = props;

  return (
    <div className="contain" onClick={handleClick}>
      <img src={imgSrc}></img>
      <div className="text" style={{ color: color || "#000" }}>
        {text}
      </div>
    </div>
  );
}

export default React.memo(IconItem);
