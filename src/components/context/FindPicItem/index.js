import React, { useRef, useEffect, useState } from "react";
import { withRouter } from "react-router";
import "./index.css";

//引入icon
import download from "./assets/download.png";
import loading from "./assets/loading.png";
function FindPicItem(props) {
  /**
   *title:标题 String
   *desc：描述 String
   *count：下载次数 Number
   *imgSrc:[]
   *handleClick:function
   */
  const [isLoaded, setIsLoaded] = useState(false);
  const { title, desc, count } = props;
  const { imgSrc } = props;
  const { handleClick } = props;
  const img = (imgSrc || [1, 2, 3, 4, 5, 8, 9, 10]).map((item) => (
    <div className="find-pic-item-img-box">
      {
        <div
          className="loading-box"
          style={{ display: isLoaded ? "none" : "flex" }}
        >
          <img style={{ width: "20px", height: "20px" }} src={loading} alt="" />
          <div>努力加载中...</div>
        </div>
      }
      {
        <img
          onLoad={() => {
            setIsLoaded(true);
            // console.log("loaded");
            // handleImgSrcLoad && handleImgSrcLoad();
          }}
          style={{ display: isLoaded ? "block" : "none" }}
          src={"https://picsum.photos/360/460?random=" + item}
          alt=""
        />
      }
    </div>
  ));
  return (
    <div className="find-pic-item-box">
      <div className="find-pic-item-message">
        <div className="find-pic-item-first-line">
          <div className="find-pic-item-title">{title || "无标题"}</div>
          <span className="hot-tag">热门</span>
        </div>
        <div className="find-pic-item-desc">
          <span className="find-pic-item-descption">{desc || "无描述"}</span>
          <div>
            <img src={download} alt="" />
            <span className="find-pic-item-download-count">{count || 0}</span>
          </div>
        </div>
      </div>
      <div className="find-pic-img-container">{img}</div>
    </div>
  );
}

export default React.memo(withRouter(FindPicItem));
