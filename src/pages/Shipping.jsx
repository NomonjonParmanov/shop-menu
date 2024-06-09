import React, { useEffect } from "react";
import Dostavka from "../components/dostavka/Dostavka";
import Map from "../components/map/Map";

const Shipping = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Dostavka />
      <Map />
    </div>
  );
};

export default Shipping;
