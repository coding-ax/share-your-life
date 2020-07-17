import React from "react";
import FindPicItem from "../FindPicItem";
import "./index.css";
function FindPic(props) {
  const { dataList } = props;
  const findPicList = (dataList||[{},{},{},{}]).map((item) => <FindPicItem {...item} />);
  return <div className="find-pic-box">{findPicList}</div>;
}

export default React.memo(FindPic);
