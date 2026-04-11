import React from 'react';
import styles from './information.module.css';

const InformationLayout = () => {
  return (
    <div className={styles.informationLayout}>
      <div className={styles.informationText}>Ходит: X</div>
    </div>
  );
};

export default InformationLayout;
