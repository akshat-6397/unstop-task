import { useState } from 'react';
import Header from './Header';
import MainBodyDesktop from './MainBodyDesktop';
import SideBar from './SideBar';

const DesktopComponent = () => {
    const[open, setOpen] = useState(false);

    return(
        <div style={{display: 'flex'}}><SideBar /><div style={{backgroundColor: '#DADCE0', width: '100vw', padding: '0 16px' }}><Header /><MainBodyDesktop open={open} setOpen={setOpen} /></div></div>
    )
};

export default DesktopComponent;