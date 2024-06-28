import briefcaseIcon from "../assets/briefcaseIcon.png";
import messageIcon from "../assets/messageIcon.png";
import newNotificationIcon from "../assets/newNotification.png";
import coinhandIcon from "../assets/coinhandIcon.png";
import notificationIcon from "../assets/notificationIcon.png";
import atlassianIcon from "../assets/atlassianIcon.png";
import dropIcon from "../assets/dropIcon.png";
import newNotification from "../assets/newNotification.png";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navWrapper">
      <span className="logoWrapper">
        <p>Logo</p>
      </span>
      <span className="navLinksWrapper">
        <span className="briefLinkWrapper">
          <a className="briefcaseWrapper">
            <img src={briefcaseIcon} />
            <p>Jobs</p>
          </a>
        </span>
        <a className="messageWrapper">
          <span className="messageIconWrapper">
            <img src={messageIcon} className="messageIcon" />
            <img src={newNotification} className="messageAlert" />
          </span>

          <p>Messages</p>
        </a>
        <a className="coinHandWrapper">
          <img src={coinhandIcon} />
          <p>Payments</p>
        </a>
      </span>
      <span className="notProfWrapper">
        <span className="notificationIconWrapper">
          <img src={notificationIcon} className="notificationLogo" />
          <img src={newNotification} className="notificationAlert" />
        </span>
        <span className="atlassianDropLogo">
          <img src={atlassianIcon} className="atlassianLogo" />
          <img src={dropIcon} className="dropLogo" />
        </span>
      </span>
    </div>
  );
};

export default Navbar;
