import React from 'react';
import './information.module.css';

const InformationLayout = ({ children }) => {
  return (
    <div className="information-layout">
      {children}
    </div>
  );
};

export default InformationLayout;
