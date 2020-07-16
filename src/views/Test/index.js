import React, { useState, useEffect } from "react";
import HomePicItem from "../../components/context/HomePicItem";
import "./test.css"
function Test(props) {
  return (
    <div className="masonry">
      {[1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 1, 6, 4, 8, 6, 8].map(
        (item) => {
          return (
            <HomePicItem
              imgSrc={"https://picsum.photos/360/460?random=" + item}
            ></HomePicItem>
          );
        }
      )}
    </div>
  );
}

export default React.memo(Test);
