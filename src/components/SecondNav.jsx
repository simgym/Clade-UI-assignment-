import React from "react";
import "./SecondNav.css";

const SecondNav = () => {
  return (
    <div className="secondNavWrapper">
      <span className="secondNavLinksWrapper">
        <p className="selectedSecondNavLink">Job preview</p>
        <p style={{ color: "#888888", fontWeight: 600 }}>Applicants</p>
        <p style={{ color: "#888888", fontWeight: 600 }}>Match</p>
        <p style={{ color: "#888888", fontWeight: 600 }}>Messages</p>
      </span>
    </div>
  );
};

export default SecondNav;
