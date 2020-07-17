import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import "./index.css";
import download from "./assets/download.png";
import loading from "./assets/loading.png";
//  props handleCLick title describtion downloadCount
function HomePicItem(props) {
  const { title, desc, imgSrc, downloadCount } = props;
  const { handleClick, handleImgSrcLoad } = props;
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="home-pic-box"
      onClick={() => {
        handleClick && handleClick();
      }}
    >
      <div className="home-pic-img-box">
        {
          <div
            className="loading-box"
            style={{ display: isLoaded ? "none" : "flex" }}
          >
            <img
              style={{ width: "20px", height: "20px" }}
              src={loading}
              alt=""
            />
            <div>努力加载中...</div>
          </div>
        }
        {
          <img
            style={{ display: isLoaded ? "block" : "none" }}
            src={imgSrc || "https://picsum.photos/360/460?random=1"}
            onLoad={() => {
              setIsLoaded(true);
              // console.log("loaded");
              handleImgSrcLoad && handleImgSrcLoad();
            }}
          ></img>
        }
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
