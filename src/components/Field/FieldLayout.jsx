import React from 'react';
import styles from './field.module.css';
import PropTypes from 'prop-types';
import { PLAYER_X, PLAYER_O, EMPTY_CELL } from '../../utils/constants';

// Определяем тип для значения клетки — только X, 0 или пустая строка
const cellValue = PropTypes.oneOf([PLAYER_X, PLAYER_O, EMPTY_CELL]);

const FieldLayout = ({ field, onCellClick, isGameEnded }) => {
	const getButtonClass = (cell) => {
		if (cell === 'X') return `${styles.fieldButton} ${styles.x}`;
		if (cell === 'O' || cell === '0') return `${styles.fieldButton} ${styles.o}`;
		return styles.fieldButton;
	};

	return (
		<div className={styles.fieldLayout}>
			<div className={styles.fieldGrid}>
				{field.map((cell, index) => (
					<button
						key={index}
						className={getButtonClass(cell)}
						onClick={() => onCellClick(index)}
						disabled={!!cell || isGameEnded}
					>
						{cell || ''}
					</button>
				))}
			</div>
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(cellValue).isRequired,
	onCellClick: PropTypes.func.isRequired,
	isGameEnded: PropTypes.bool,
};

export default FieldLayout;
