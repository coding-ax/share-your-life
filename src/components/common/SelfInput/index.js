import React, { useState, useEffect } from "react";
import close from "./assets/close.png";
import "./index.css";
/**
 *
 * @param {imgSrc placeHolder type} props
 * imgSrc:指定图标icon placeHolder指定占位string type string指定占位
 * type指定类型"password/text"
 * handleInput:父组件回调函数,处理输入
 * value:父组件指定值
 */
function SelfInput(props) {
  // 默认属性
  const { imgSrc, placeHolder, type } = props;
  // hanleInput 和 value分别处理值的更新
  const { handleInput, value } = props;
  const [isInput, setIsInput] = useState(false);
  useEffect(() => {
    if (value != "") {
      setIsInput(true);
    } else {
      setIsInput(false);
    }
  }, [value]);
  return (
    <div className="input-container">
      <div className="img-box">
        <img src={imgSrc} alt="" />
      </div>
      <div className="input-area">
        <input
          className="input-ref"
          type={type ? type : "text"}
          placeholder={placeHolder}
          value={value ? value : ""}
          onChange={(e) => {
            // 调用父组件方法
            if (handleInput) handleInput(e.target.value);
            else return;
          }}
        />
      </div>
      <div className="canClear">
        {isInput && (
          <img
            src={close}
            alt=""
            onClick={() => {
              // 清空
              handleInput("");
            }}
          />
        )}
      </div>
    </div>
  );
}

export default React.memo(SelfInput);
