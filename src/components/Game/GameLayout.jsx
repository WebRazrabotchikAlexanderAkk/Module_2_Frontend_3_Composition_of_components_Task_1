import React from 'react';
import styles from './game.module.css';
import Information from '../Information/Information';
import Field from '../Field/Field';

const GameLayout = () => {
  return (
    <div className={styles.game}>
      <Information />
      <Field />
      <button className={styles.restartButton}>Начать заново</button>
    </div>
  );
};

export default GameLayout;
