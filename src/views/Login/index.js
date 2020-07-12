import React, { useState, useEffect } from "react";
import GoBack from "../../components/common/BackIcon";
import "./index.css";


import account from "../../assets/iconfont/Login/account.png";
import password from "../../assets/iconfont/Login/password.png";
import SelfInput from "../../components/common/SelfInput";
import LoginButton from "../../components/common/LoginButton";


function Login(props) {
  const [username, setUsername] = useState("");
  const [passd, setPassd] = useState("");

  const handleUsernameChange = (text) => {
    setUsername(text);
  };
  const handlePassdChange = (text) => {
    setPassd(text);
  };
  // go back fixed
  return (
    <div className="container">
      <GoBack />
      <div className="main-box">
        <h1>welcome to 图网</h1>
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
          <div className="login-button">
            <LoginButton text="登录" handleClick={() => {}}></LoginButton>
          </div>
        </div>
      </div>
    </div>
  );
}
// 以memo形式导出
export default React.memo(Login);
