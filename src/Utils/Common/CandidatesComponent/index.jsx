import "./style.scss";
import candidates from "../../Icons/candidates.png";

const CandidatesComponent = () => {
    return (
        <div className="main-candidate">
            <h2>Candidates</h2>
            <div className="image-text">
                <img src={candidates} alt='candidatesImage'/>
                <div className="head-text">
                    <label><h3>11,145</h3><span>+89</span></label>
                    <h4>Total Candidate</h4>
                </div>
                <div className="line"></div>
                <div className="head-text">
                    <label><h3>1,14</h3><span>+89</span></label>
                    <h4>Who Attamped</h4>
                </div>
            </div>
        </div>
    );
};

export default CandidatesComponent;