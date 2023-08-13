import "./style.scss";
import purpose from "../../Icons/purpose.png";

const PurposeComponent = () => {
    return (
        <div className="main-purpose">
            <h2>Total Purpose</h2>
            <div className="image-text">
                <img src={purpose} alt='purposeImage'/>
                <h3>11</h3>
            </div>
        </div>
    );
};

export default PurposeComponent;