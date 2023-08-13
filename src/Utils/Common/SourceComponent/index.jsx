import './style.scss';
import source from "../../Icons/source.png";

const SourceComponent = () => {
    return (
        <div className='main-source'>
            <h2>Candidates Source</h2>
            <div className="image-text">
                <img src={source} alt='candidatesImage'/>
                <div className="head-text">
                    <label><h3>11,000</h3><span>+89</span></label>
                    <h4>E-mail</h4>
                </div>
                <div className="line"></div>
                <div className="head-text">
                    <label><h3>145</h3><span>+89</span></label>
                    <h4>Social Share</h4>
                </div>
                <div className="line"></div>
                <div className="head-text">
                    <label><h3>145</h3><span>+89</span></label>
                    <h4>Unique Link</h4>
                </div>
            </div>
        </div>
    )
};

export default SourceComponent;