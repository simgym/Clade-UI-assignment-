import locationIcon from "../../assets/locationIcon.png";
import databaseIcon from "../../assets/databaseIcon.png";
import greenDotIcon from "../../assets/greenDotIcon.png";
import greyDotIcon from "../../assets/greyDotIcon.png";
import "./LeftFirst.css";

const LeftFirst = () => {
  return (
    <main className="leftFirstMainWrapper">
      <div className="leftFirstWrapper">
        <div className="leftFirstUpper">
          <span className="leftFirstUpperHeading">
            <p>Senior Product Designer</p>
          </span>
          <span className="leftFirstUpperOuter">
            {/* <p>.</p> */}
            <span className="greyDotIcon">
              <img src={greyDotIcon} />
            </span>
            <p className="postedDays">posted 2 days ago</p>
            <span className="leftFirstUpperInner">
              {/* <p>.</p> */}
              <span className="greenDotIcon">
                <img src={greenDotIcon} />
              </span>
              <p>Open</p>
            </span>
          </span>
        </div>
        <div className="leftFirstLower">
          <span className="locationWrapper">
            <img src={locationIcon} />
            <p>Delaware, USA</p>
          </span>
          <span className="greyDotIcon">
            <img src={greyDotIcon} />
          </span>
          <span className="moneyWrapper">
            <img src={databaseIcon} />
            <p>$300k-$400k</p>
          </span>
        </div>
      </div>
    </main>
  );
};

export default LeftFirst;
