import React, { useEffect } from "react";
import ReturnContent from "../components/return/ReturnContent";

const Return = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ReturnContent />
    </div>
  );
};

export default Return;
