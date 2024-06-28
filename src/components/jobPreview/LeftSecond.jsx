import figmaIcon from "../../assets/figmaIcon.png";
import adobeIllusIcon from "../../assets/adobeIllustratorIcon.png";
import adobeXdIcon from "../../assets/adobeXdIcon.png";
import "./LeftSecond.css";

const LeftSecond = () => {
  return (
    <div className="leftSecondWrapper">
      <div className="leftSecondContent">
        <span className="reqSkillsWrapper">
          <span className="reqSkillsHeading">
            <p>Skills Required</p>
          </span>
          <span className="reqSkills">
            <span className="figmaWrapper">
              <span>
                {" "}
                <img src={figmaIcon} />
                <p>Figma</p>
              </span>
            </span>
            <span className="adobeIllusWrapper">
              <span>
                {" "}
                <img src={adobeIllusIcon} />
                <p>Adobe Illustrator</p>
              </span>
            </span>
            <span className="adobeXdWrapper">
              <span>
                <img src={adobeXdIcon} />
                <p>Adobe XD</p>
              </span>
            </span>
          </span>
        </span>
        <span className="leftSecondRight">
          <span className="preferredLangWrapper">
            <p className="leftSecondRightTitle">Preferred Language</p>
            <p className="leftSecondRightContent">English</p>
          </span>
          <span className="typeWrapper">
            <p className="leftSecondRightTitle">Type</p>
            <p className="leftSecondRightContent">Full time</p>
          </span>
          <span className="yoeWrapper">
            <p className="leftSecondRightTitle">Years of Experience</p>
            <p className="leftSecondRightContent">3+ Years of Experience</p>
          </span>
        </span>
      </div>
    </div>
  );
};

export default LeftSecond;
