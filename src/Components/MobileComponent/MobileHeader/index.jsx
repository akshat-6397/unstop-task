import menuBar from "../../../Utils/Icons/menuBar.png";
import "./style.scss";
const MobileHeader = () => {
    return (
        <div className="mobile-header">
            <img src={menuBar} alt="menuImage" />
            <h1>Assessment</h1>
        </div>
    );
};

export default MobileHeader;