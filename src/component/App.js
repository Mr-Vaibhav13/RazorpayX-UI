import React, { useState } from 'react';
import SideBar from './SideBar';
import Main from './Main';
import Hide from './Hide';

const App = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const handleMouseEnter = () => {
    setShowSideBar(true);
  };

  const handleMouseLeave = () => {
    setShowSideBar(false);
  };

  return (
    <div className='flex'>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ width: showSideBar ? '16vw' : '4vw' }} 
      >
        {showSideBar ? <SideBar /> : <Hide />}
        {/* <Hide /> */}
      </div>

      <div className={`${showSideBar? "w-[84vw]":"w-[96vw]"} bg-[#0D1219]`}>
      <Main />
      </div>
    </div>
  );
};

export default App;
