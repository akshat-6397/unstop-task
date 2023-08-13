import { useEffect, useState } from "react";
import DesktopComponent from "./Components/DesktopComponent";
import MobileComponent from "./Components/MobileComponent";

const Responsive = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 990);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 990);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [isMobile]);

  return <div>{isMobile ? <MobileComponent /> : <DesktopComponent />}</div>;
};

export default Responsive;
