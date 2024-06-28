import React from "react";
import "./LeftThird.css";

const LeftThird = () => {
  return (
    <div className="leftThirdWrapper">
      <div className="leftThirdContent">
        <p className="aboutJobHeading">About the job</p>
        <div className="dataLists">
          <div className="firstList">
            <li>Handle the UI/UX research design</li>
            <li>
              Work on researching on latest web applications designs & trends
            </li>
            <li>Work on conceptualizing and visualizing</li>
            <li>
              Work on creating graphics content and other graphic related works
            </li>
          </div>
          <div className="secondList">
            <p>Benefits:</p>
            <ul>
              <li>Health Insurance</li>
              <li>Provident Fund</li>
            </ul>
          </div>
          <div className="thirdList">
            <p>Schedule:</p>
            <ul>
              <li>Day shift</li>
            </ul>
          </div>
          <div className="fourthList">
            <p>Supplemental pay types:</p>
            <ul>
              <li>Performance bonus</li>
              <li>Yearly bonus</li>
            </ul>
          </div>
          <p>Work Location: In person</p>
        </div>
      </div>
    </div>
  );
};

export default LeftThird;
