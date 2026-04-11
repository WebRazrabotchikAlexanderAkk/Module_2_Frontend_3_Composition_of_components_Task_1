import React from 'react';
import styles from './field.module.css';

const FieldLayout = () => {
  const buttons = Array.from({ length: 9 }, (_, i) => i);

  return (
    <div className={styles.fieldLayout}>
      <div className={styles.fieldGrid}>
        {buttons.map((num) => (
          <button key={num} className={styles.fieldButton}>
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FieldLayout;
