import MainBodyMobile from "./MainBodyMobile";
import MobileHeader from "./MobileHeader";
import MobileSubheader from "./MobileSubheader";
import plus from "../../Utils/Icons/PlusButton.png";
import useIsMobile from "../../Utils/useIsMobile";
import { useState } from "react";

const MobileComponent = () => {
    const isMobile = useIsMobile();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };
    return(
        <div style={{position: 'relative'}}>
            <MobileHeader />
            <MobileSubheader />
            <MainBodyMobile open={open} setOpen={setOpen} />
            {isMobile?<div><img onClick={handleClick} style={{height: '50px', width: '50px', position: 'fixed', right: '10px'}} src={plus} alt='PlusButton'/></div>
            :null}</div>
    );
};

export default MobileComponent;