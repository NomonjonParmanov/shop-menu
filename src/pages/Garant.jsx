import React, { useEffect } from "react";
import GarantContent from "../components/garant/GarantContent";

const Garant = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div>
      <GarantContent />
    </div>
  );
};

export default Garant;
