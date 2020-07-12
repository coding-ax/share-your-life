import React, { useState, useEffect } from "react";
import LoginButton from '../../components/common/LoginButton'
function Test(props) {
  const [value, setValue] = useState("");
  function handleChange(text) {
    setValue(text);
  }

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div>
      <LoginButton text="登录" handleClick={()=>{}}></LoginButton>
    </div>
  );
}

export default React.memo(Test);
