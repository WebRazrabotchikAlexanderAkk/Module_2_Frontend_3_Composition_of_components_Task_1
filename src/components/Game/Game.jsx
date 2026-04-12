import React, { useState } from 'react';
import GameLayout from './GameLayout';
import { getInitialField, checkGameStatus } from '../../utils/gameLogic';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(getInitialField());

	const restartGame = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(getInitialField());
	};

	const handleCellClick = (index) => {
		if (field[index] || isGameEnded) return;
		const newField = [...field];
		newField[index] = currentPlayer;
		setField(newField);

		const {
			isGameEnded: ended,
			isDraw: draw,
			nextPlayer,
		} = checkGameStatus(newField, currentPlayer);
		setIsGameEnded(ended);
		setIsDraw(draw);
		if (nextPlayer) {
			setCurrentPlayer(nextPlayer);
		}
	};

	return (
		<GameLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			field={field}
			onCellClick={handleCellClick}
			onRestart={restartGame}
		/>
	);
};

export default Game;
