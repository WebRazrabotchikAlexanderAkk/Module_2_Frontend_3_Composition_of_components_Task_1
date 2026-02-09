import { useState } from 'react';
import { GameLayout } from './gameLayout';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X'); /* кто ходит в данный момент */
	const [isGameEnded, setIsGameEnded] = useState(false); /* была ли завершена игра */
	const [isDraw, setIsDraw] = useState(false); /* была ли ничья */
	return (
		<>
			<GameLayout />
		</>
	);
};
