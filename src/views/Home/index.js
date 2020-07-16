import React, { useState, useRef } from "react";
import { withRouter } from "react-router";
import HomePicItem from "../../components/context/HomePicItem";
import Scroll from "../../components/common/Scroll";
import SelfInput from "../../components/common/SelfInput";
import search from "../../assets/iconfont/Main/search.png";
// css
import "./index.css";
function Home(props) {
  const [searchContent, setSearchContent] = useState("");
  function handleSearchContentChange(text) {
    setSearchContent(text);
  }
  const scroll = useRef();
  console.log(scroll);
  const handleImgOnloadFinished = () => {
    scroll.current.refresh();
  };

  return (
    <div className="home-box">
      <div className="search-box">
        <SelfInput
          value={searchContent}
          handleInput={handleSearchContentChange}
          placeHolder="请输入搜索内容"
          imgSrc={search}
          type="text"
        />
      </div>
      <div className="wrapper">
        <Scroll
          ref={scroll}
          click="true"
          pullUp={() => {
            // console.log("pullUp");
          }}
          pullDown={() => {
            // console.log("pullDown");
          }}
        >
          <div className="home-content">
            <div className="masonry">
              {[
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                9,
                10,
                11,
                12,
                13,
                15,
                1,
                6,
                4,
                8,
                6,
                8,
              ].map((item) => {
                return (
                  <HomePicItem
                    handleImgSrcLoad={handleImgOnloadFinished}
                    imgSrc={"https://picsum.photos/360/460?random=" + item}
                  ></HomePicItem>
                );
              })}
            </div>
          </div>
        </Scroll>
      </div>
    </div>
  );
}
export default React.memo(withRouter(Home));
