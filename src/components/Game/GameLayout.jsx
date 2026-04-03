import React from 'react';
import './game.module.css';

const GameLayout = ({ children }) => {
  return (
    <div className="game-layout">
      {children}
    </div>
  );
};

export default GameLayout;
