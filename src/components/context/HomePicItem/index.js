import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import "./index.css";
import download from "./assets/download.png";
//  props handleCLick title describtion downloadCount
function HomePicItem(props) {
  const { title, desc, imgSrc, downloadCount } = props;
  const { handleClick, handleImgSrcLoad } = props;
  return (
    <div
      className="home-pic-box"
      onClick={() => {
        handleClick && handleClick();
      }}
    >
      <div className="home-pic-img-box">
        <img
          src={imgSrc || "https://picsum.photos/360/460?random=1"}
          onLoad={() => {
            // console.log("loaded");
            handleImgSrcLoad && handleImgSrcLoad();
          }}
        ></img>
      </div>
      <div className="home-pic-content">
        <div className="home-pic-title">{title || "无标题"}</div>
        <div className="home-pic-say">
          <span className="home-pic-desc">{desc || "无描述"}</span>
          <span className="home-pic-download">
            <img src={download} alt="" />
            <span className="download-count">{downloadCount || 0}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
export default React.memo(withRouter(HomePicItem));
/*随机图片接口 https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture */
