import React from 'react';
import './field.module.css';

const FieldLayout = ({ children }) => {
  return (
    <div className="field-layout">
      {children}
    </div>
  );
};

export default FieldLayout;
