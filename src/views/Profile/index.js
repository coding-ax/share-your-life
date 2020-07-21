import React from "react";
import { withRouter } from "react-router";

// css
import "./index.css";
// 组件
import Scroll from "../../components/common/Scroll";
import classnames from "classnames";
import IconItem from "../../components/common/IconItem";
// 用到的icon
import head from "../../assets/img/Main/jojo.png";
import setting from "../../assets/iconfont/Main/setting.png";
import cammer from "../../assets/iconfont/Main/cammer.png";
import help from "../../assets/iconfont/Main/help.png";
import form from "../../assets/iconfont/Main/form.png";
import edit from "../../assets/iconfont/Main/edit.png";
import download from "../../assets/iconfont/Main/download.png";
import like from "../../assets/iconfont/common/like2.png";
import add from "../../assets/iconfont/common/add.png";
// 定义组件
// 头部栏目
function Header(props) {
  const { nickName, desc, hotCount, fansCount, attackCount } = props;
  const { avator } = props;
  // const { handleAvatorClick } = props
  return (
    <div className="header-container">
      <div className="header-top">
        <div className="header-top-left">
          <div className="header-nickname">{nickName || "倾听她的事"}</div>
          <div className="header-desc">
            {desc || "每个人都有快乐的时候,你呢？"}
          </div>
        </div>
        <div className="header-top-right">
          <img src={avator || head} className="header-avator" alt="" />
          <img src={edit} className="header-edit" alt="" />
        </div>
      </div>
      <div className="header-bottom">
        <div className="header-bottom-item">
          <div className="header-bottom-count">{hotCount || 97}</div>
          <div className="header-bottom-name">人气</div>
        </div>
        <div
          className={classnames({
            "header-bottom-item": true,
            "item-center": true,
          })}
        >
          <div className="header-bottom-count">{fansCount || 634}</div>
          <div className="header-bottom-name">粉丝</div>
        </div>
        <div className="header-bottom-item">
          <div className="header-bottom-count">{attackCount || 58}</div>
          <div className="header-bottom-name">关注</div>
        </div>
      </div>
    </div>
  );
}

function Operation(props) {
  return (
    <div className="operation-box">
      <div className="operation-left">
        <div className="operation-button">我的作品</div>
        <div className="operation-icon">
          <img src={like} alt="" />
        </div>
      </div>
      <div className="operation-right">
        <div className="operation-icon">
          <img src={add} alt="" />
        </div>
      </div>
    </div>
  );
}

function PicItem(props) {
  const { imgSrcList, title, desc } = props;
  // imgSrcList长度必须为4
  if (imgSrcList.length != 4) {
    console.log("imgSrc err");
  }
  const imgDiv = imgSrcList.map((item) => (
    <div className="pic-item-img-box">
      <img src={item} alt="" />
    </div>
  ));
  return (
    <div className="pic-item-content">
      <div className="pic-item-top"></div>
      <div className="pic-item-bottom">
        <div className="pic-item-title">{title}</div>
        <div className="pic-item-desc">{desc}</div>
      </div>
    </div>
  );
}

function Profile(props) {
  return (
    <div className="profile-box">
      <div className="profile-cammer">
        <img src={cammer} alt="" />
      </div>
      <div className="profile-wrapper">
        <Scroll
          click="true"
          pullUp={() => {
            // console.log("pullUp");
          }}
          pullDown={() => {
            // console.log("pullDown");
          }}
        >
          <div className="profile-content">
            <div className="profile-header">
              <Header />
            </div>
            <div className="profile-icon-box">
              <IconItem imgSrc={download} text="历史下载" />
              <IconItem imgSrc={form} text="审核进度" />
              <IconItem imgSrc={help} text="帮助反馈" />
              <IconItem imgSrc={setting} text="设置中心" />
            </div>

            <div className="profile-detail-box">
              <Operation />
            </div>
          </div>
        </Scroll>
      </div>
    </div>
  );
}
export default React.memo(withRouter(Profile));
