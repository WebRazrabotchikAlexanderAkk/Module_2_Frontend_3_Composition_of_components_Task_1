import React from 'react';
import styles from './game.module.css';
import Information from '../Information/Information';
import Field from '../Field/Field';
import PropTypes from 'prop-types';
import { PLAYER_X, PLAYER_O, EMPTY_CELL } from '../../utils/constants';

// Определяем тип для значения клетки — только X, 0 или пустая строка
const cellValue = PropTypes.oneOf([PLAYER_X, PLAYER_O, EMPTY_CELL]);

const GameLayout = ({
	currentPlayer,
	isGameEnded,
	isDraw,
	field,
	onCellClick,
	onRestart,
}) => {
	return (
		<div className={styles.game}>
			<Information
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
			<Field field={field} onCellClick={onCellClick} isGameEnded={isGameEnded} />
			<button className={styles.restartButton} onClick={onRestart}>
				Начать заново
			</button>
		</div>
	);
};

GameLayout.propTypes = {
	currentPlayer: PropTypes.string.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
	field: PropTypes.arrayOf(cellValue).isRequired,
	onCellClick: PropTypes.func.isRequired,
	onRestart: PropTypes.func.isRequired,
};

export default GameLayout;
