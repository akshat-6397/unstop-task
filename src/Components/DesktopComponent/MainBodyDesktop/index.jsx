import Card from '../../../Utils/Card';
import CandidatesComponent from '../../../Utils/Common/CandidatesComponent';
import PurposeComponent from '../../../Utils/Common/PurposeComponent';
import SourceComponent from '../../../Utils/Common/SourceComponent';
import TotalAssessment from '../../../Utils/Common/TotalAssessment';
import './style.scss';
const MainBodyDesktop = (props) => {
    return(
        <div className="main-body">
            <h1>Assessments Overview</h1>
            <div className="middle-horizontal-card">
                <TotalAssessment />
                <CandidatesComponent />
                <SourceComponent />
                <PurposeComponent />
            </div>
            <div className='main-body-footer'>
                <h1>My Assessment</h1>
                <div style={{marginTop: '16px', display: 'flex', justifyContent: 'space-between'}}><Card open={props?.open} setOpen={props?.setOpen} isPlus={true} /><Card people={1} /><Card people={2} /></div>
            </div>
        </div>
    );
};

export default MainBodyDesktop;