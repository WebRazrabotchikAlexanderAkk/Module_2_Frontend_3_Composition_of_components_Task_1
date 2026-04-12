export const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

export const checkWinner = (board) => {
	return WIN_PATTERNS.find(
		([a, b, c]) => board[a] && board[a] === board[b] && board[a] === board[c],
	);
};

export const getInitialField = () => Array(9).fill('');

export const checkGameStatus = (newField, currentPlayer) => {
	const winner = checkWinner(newField);
	if (winner) {
		return { isGameEnded: true, isDraw: false, winner };
	}

	if (!newField.includes('')) {
		return { isGameEnded: false, isDraw: true, winner: null };
	}

	const nextPlayer = currentPlayer === 'X' ? '0' : 'X';
	return { isGameEnded: false, isDraw: false, nextPlayer, winner: null };
};
