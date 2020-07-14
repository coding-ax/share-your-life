import React, { useState } from "react";
import { withRouter } from "react-router";

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
        <Scroll>
          <div className="home-content">
            <ul>
              <li>你好</li>
              <li>你好</li> <li>你好</li> <li>你好</li> <li>你好</li>{" "}
              <li>你好</li> <li>你好</li> <li>你好</li> <li>你好</li>{" "}
              <li>你好</li> <li>你好</li> <li>你好</li> <li>你好</li>{" "}
              <li>你好</li> <li>你好</li> <li>你好</li> <li>你好</li>{" "}
              <li>你好</li> <li>你好</li> <li>你好</li> <li>你好</li>{" "}
              <li>你好</li> <li>你好</li> <li>你好</li> <li>你好</li>{" "}
              <li>你好</li> <li>你好</li> <li>你好</li> <li>你好</li>{" "}
              <li>你好</li> <li>你好</li> <li>你好</li> <li>你好</li>{" "}
              <li>你好</li> <li>你好</li> <li>你好</li> <li>你好</li>{" "}
              <li>你好</li> <li>你好</li> <li>你好</li> <li>你好</li>{" "}
              <li>你好</li> <li>你好</li> <li>你好</li> <li>你好</li>{" "}
              <li>你好</li> <li>你好</li> <li>你好</li> <li>你好</li>{" "}
              <li>你好</li> <li>你好</li> <li>你好</li> <li>你好</li>{" "}
              <li>你好</li> <li>你好</li> <li>你好</li> <li>你好</li>{" "}
              <li>你好</li> <li>你好</li> <li>你好</li> <li>你好</li>{" "}
              <li>你好</li> <li>你好</li> <li>你好</li> <li>你好</li>{" "}
              <li>你好</li> <li>你好</li> <li>你好</li> <li>你好</li>{" "}
              <li>你好</li> <li>你好</li> <li>你好</li> <li>你好</li>{" "}
              <li>你好</li> <li>你好</li> <li>你好</li> <li>你好</li>{" "}
              <li>你好</li> <li>你好</li> <li>你好</li> <li>你好</li>{" "}
              <li>你好</li> <li>你好</li> <li>你好</li> <li>你好</li>{" "}
              <li>你好</li> <li>你好</li> <li>你好</li> <li>你好</li>{" "}
              <li>你好</li> <li>你好</li> <li>你好</li> <li>你好</li>{" "}
              <li>你好</li> <li>你好</li> <li>你好</li> <li>你好</li>{" "}
              <li>你好</li> <li>你好</li> <li>你好</li> <li>你好</li>{" "}
              <li>你好</li> <li>你好</li> <li>你好</li> <li>你好</li>{" "}
              <li>你好</li> <li>你好</li> <li>你好</li> <li>你好</li>{" "}
              <li>你好</li> <li>你好</li> <li>你好</li> <li>你好</li>{" "}
              <li>你好</li> <li>你好</li> <li>你好</li> <li>你好</li>{" "}
              <li>你好</li> <li>你好</li> <li>你好</li> <li>你好</li>{" "}
              <li>你好</li> <li>你好</li> <li>你好</li> <li>你好</li>{" "}
              <li>你好</li> <li>你好</li>
            </ul>
          </div>
        </Scroll>
      </div>
    </div>
  );
}
export default React.memo(withRouter(Home));
