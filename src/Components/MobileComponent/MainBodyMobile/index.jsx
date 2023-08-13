import search from "../../../Utils/Icons/search.png";
import filter from "../../../Utils/Icons/filter_list_alt.png";
import bar from "../../../Utils/Icons/bar_chart.png";
import renderBar from "../../../Utils/Icons/render_bar.png";
import "./style.scss";
import { useState } from "react";
import TotalAssessment from "../../../Utils/Common/TotalAssessment";
import PurposeComponent from "../../../Utils/Common/PurposeComponent";
import CandidatesComponent from "../../../Utils/Common/CandidatesComponent";
import SourceComponent from "../../../Utils/Common/SourceComponent";
import Card from "../../../Utils/Card";

const MainBodyMobile = (props) => {
  const [openStat, setOpenStat] = useState(false);
  const renderStat = () => {
    return (
      <div className="renderStat">
        <div className="item-1"><TotalAssessment /></div>
        <div className="item-2"><PurposeComponent /></div>
        <div className="item-3"><CandidatesComponent /></div>
        <div className="item-4"><SourceComponent /></div>
      </div>
    );
  };
  return (
    <div className="main-body">
      {openStat ? renderStat() : null}
      <div className="body-head">
        <h1>My Assessment</h1>
        <div className="body-head-images">
          <img className="image1" src={search} alt="serachImage" />
          <img className="image2" src={filter} alt="filterInage" />
          {!openStat?<img
            className="image3"
            onClick={() => setOpenStat(!openStat)}
            src={bar}
            alt="bar"
          />:<img className="image3" style={{height: '40px', width: '40px'}} onClick={() => setOpenStat(!openStat)} src={renderBar}
            alt="bar" />}
        </div>
      </div>
      <Card open={props?.open} setOpen={props?.setOpen} isPlus={true} />
      <Card people={1} />
      <Card people={3} />
      <Card people={3} />
      <Card people={3} />
      <Card people={3} />
      <Card people={3} />
      <Card people={2} />
    </div>
  );
};

export default MainBodyMobile;
