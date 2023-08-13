import assessment from "../../Icons/assessment.png";
import "./style.scss";

const TotalAssessment = () => {
    return (
        <div className="total-assessment">
            <h2>Total Assessment</h2>
            <div className="imageText">
                <img src={assessment} alt='assessmentImage'/>
                <h3>34</h3>
            </div>
        </div>
    );
};

export default TotalAssessment;