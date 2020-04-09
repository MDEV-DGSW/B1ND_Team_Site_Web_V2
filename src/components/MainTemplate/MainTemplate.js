import React from 'react';
import NavBar from 'components/Common/NavBar/NavBar';

import './MainTemplate.scss';

function MainTemplate({ children }) {
  return (
    <div className="main-temp">
      <div className="main-temp__body">
        <div className="main-temp__nav">
          <NavBar />
        </div>
        <div className="main-temp__content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainTemplate;