import React, { useState } from "react";
import { useHistory, withRouter } from "react-router";

// 导入图标
import account from "../../assets/iconfont/Login/account.png";
import password from "../../assets/iconfont/Login/password.png";
import qq from "../../assets/iconfont/Login/QQ.png";
import wechat from "../../assets/iconfont/Login/wechat.png";
import GoBack from "../../components/common/BackIcon";
import IconItem from "../../components/common/IconItem";
import LoginButton from "../../components/common/LoginButton";
import SelfInput from "../../components/common/SelfInput";

// 导入网络包
import { instance } from "../../network";
// 导入css
import "./index.css";
function Login(props) {
  // 声明username和passd作为参数注册
  const [username, setUsername] = useState("");
  const [passd, setPassd] = useState("");

  // 绑定输入值
  const handleUsernameChange = (text) => {
    setUsername(text);
  };
  const handlePassdChange = (text) => {
    setPassd(text);
  };

  return (
    <div className="container">
      <GoBack />
      <div className="main-box">
        <h1>欢迎来到图秀</h1>
        <div className="login">
          <div className="login-show">
            <SelfInput
              value={username}
              handleInput={handleUsernameChange}
              placeHolder="请输入账户名"
              imgSrc={account}
              type="text"
            ></SelfInput>
          </div>
          <div className="login-show">
            <SelfInput
              value={passd}
              handleInput={handlePassdChange}
              placeHolder="请输入密码"
              imgSrc={password}
              type="password"
            ></SelfInput>
          </div>
          <div className="show-text">未注册的账号将直接进行注册账号</div>
          <div className="login-button">
            <LoginButton
              text="登录"
              handleClick={() => {

              }}
            ></LoginButton>
          </div>
          <div className="login-box">
            <div className="box-item">
              <IconItem imgSrc={qq} text="QQ"></IconItem>
            </div>
            <span color="#f5f5f5">|</span>
            <div className="box-item">
              <IconItem imgSrc={wechat} text="微信"></IconItem>
            </div>
          </div>
        </div>

        <div className="last">copyright@AX 版权归AX所有</div>
      </div>
    </div>
  );
}
// 以memo形式导出
export default React.memo(withRouter(Login));
