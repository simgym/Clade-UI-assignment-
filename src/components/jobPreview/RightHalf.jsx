import deleteIcon from "../../assets/deleteIcon.png";
import editIcon from "../../assets/editIcon.png";
import applicantsIcon from "../../assets/applicantsIcon.png";
import matchesIcon from "../../assets/matchesIcon.png";
import messageIcon from "../../assets/messageIcon.png";
import viewsIcon from "../../assets/viewsIcon.png";
import "./RightHalf.css";

const RightHalf = () => {
  return (
    <div className="rightHalfWrapper">
      <div className="rightHalfCont">
        <div className="rightHalfButtonWrapper">
          <button className="deleteButton">
            <span>
              <img src={deleteIcon} />
            </span>
            <p>Delete job</p>
          </button>
          <button className="editButton">
            <img src={editIcon} />
            <p>Edit job</p>
          </button>
        </div>
        <div className="rightHalfData">
          <div>
            <span className="apllicantLogoTitle">
              <img src={applicantsIcon} />
              <p>Applicants</p>
            </span>
            <span className="totalCount">
              <p>400</p>
            </span>
          </div>
          <span className="seperator"></span>
          <div>
            <span className="matchLogoTitle">
              <img src={matchesIcon} />
              <p>Matches</p>
            </span>
            <span className="totalCount">
              <p>100</p>
            </span>
          </div>
          <span className="seperator"></span>
          <div>
            <span className="messageLogoTitle">
              <img src={messageIcon} />
              <p>Messages</p>
            </span>
            <span className="totalCount">
              <p>147</p>
            </span>
          </div>
          <span className="seperator"></span>
          <div>
            <span className="viewLogoTitle">
              <img src={viewsIcon} />
              <p>Views</p>
            </span>
            <span className="totalCount">
              <p>800</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightHalf;
