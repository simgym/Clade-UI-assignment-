import atlassianIcon from "../../assets/atlassianIcon.png";
import "./LeftFourth.css";

const LeftFourth = () => {
  return (
    <div className="leftFourthWrapper">
      <div className="leftFourthContent">
        <div className="companyNameLogoWrapper">
          <span className="companyNameLogoContent">
            <img src={atlassianIcon} />
            <p>Atlassian</p>
          </span>
        </div>
        <div className="companyInfoWrapper">
          <span className="companyInfoElement">
            <p className="companyInfoTitles">Company size</p>
            <p className="companyInfoValues">1k - 2k Employees</p>
          </span>
          <span className="companyInfoElement">
            <p className="companyInfoTitles">Type</p>
            <p className="companyInfoValues">Private</p>
          </span>
          <span className="companyInfoElement">
            <p className="companyInfoTitles">Sector</p>
            <p className="companyInfoValues">
              Information Technology, Infrastructure
            </p>
          </span>
          <span className="companyInfoElement">
            <p className="companyInfoTitles">Funding</p>
            <p className="companyInfoValues">Bootstrapped</p>
          </span>
          <span className="companyInfoElement">
            <p className="companyInfoTitles">Founded In</p>
            <p className="companyInfoValues">2019</p>
          </span>
          <span className="companyInfoElement">
            <p className="companyInfoTitles">Founded By</p>
            <p className="companyInfoValues">
              Scott Farquhar, Mike Cannon-Brookes
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeftFourth;
