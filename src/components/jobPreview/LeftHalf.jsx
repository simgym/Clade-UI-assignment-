import React from "react";
import LeftFirst from "./LeftFirst";
import LeftSecond from "./LeftSecond";
import LeftThird from "./LeftThird";
import LeftFourth from "./LeftFourth";
import "./LeftHalf.css";

const LeftHalf = () => {
  return (
    <div className="leftHalfWrapper">
      <LeftFirst />
      <LeftSecond />
      <LeftThird />
      <LeftFourth />
    </div>
  );
};

export default LeftHalf;
