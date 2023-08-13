import DesktopComponent from './Components/DesktopComponent';
import MobileComponent from './Components/MobileComponent';
import useIsMobile from "./Utils/useIsMobile";
import './index.css';

function App() {
  const isMobile = useIsMobile();
  
  return (
    <div className="App">
      {isMobile ? <MobileComponent /> : <DesktopComponent />}
    </div>
  );
}

export default App;
