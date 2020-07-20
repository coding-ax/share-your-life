import React from "react";
import { withRouter } from "react-router";
// 导入图标
import fans from "../../assets/iconfont/common/fans.png";
import notice from "../../assets/iconfont/common/message.png";
import like from "../../assets/iconfont/common/like.png";
import jojo from "../../assets/img/Main/jojo.png";
import del from "../../assets/iconfont/common/删除.png"
// 导入css
import "./index.css";
// 简单视图组件
const Title = () => (
  <div className="message-title">
    <div className="message-notice">消息通知</div>
    <img src={del} alt=""/>
  </div>
);
const BlackButton = ({ imgSrc, content }) => (
  <div className="message-button">
    <img src={imgSrc} alt="" />
    <div className="message-button-content">{content}</div>
  </div>
);
const ThreeButtonBox = () => (
  <div className="message-button-box">
    <BlackButton imgSrc={fans} content={"通知"} />
    <BlackButton imgSrc={notice} content={"粉丝"} />
    <BlackButton imgSrc={like} content={"喜欢"} />
  </div>
);
const Notice = () => <div className="message-all-sixin">全部私信</div>;

function Message(props) {
  const MessageContent = ({ avator, nickName, desc, time }) => (
    <div className="message-content-self">
      <div className="message-box-left">
        <img src={avator || jojo} alt="" />
      </div>
      <div className="message-box-right">
        <div className="message-detail-box">
          <div className="message-nickname">{nickName || "匿名"}</div>
          <div className="message-time">{time || "一分钟前"}</div>
        </div>
        <div className="message-desc">{desc || "你在说什么啊"}</div>
      </div>
    </div>
  );

  return (
    <div className="message-show-box">
      <div className="message-notice-box">
        <Title />
      </div>
      <div className="message-button-box">
        <ThreeButtonBox />
      </div>
      <div className="message-sixin-box">
        <Notice />
      </div>
      <div className="message-community-box">
        <MessageContent />
        <MessageContent />
        <MessageContent />
        <MessageContent />
        <MessageContent />
      </div>
    </div>
  );
}
export default React.memo(withRouter(Message));
