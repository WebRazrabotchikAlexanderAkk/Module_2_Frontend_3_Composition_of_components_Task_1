// Information — будет выводить, чей на данный момент ход (крестика или нолика), либо информацию о победе одной из сторон;

import { InformationLayout } from './InformationLayout';

export const Information = ({ currentPlayer, isGameEnded, isDraw }) => {
	return (
		<InformationLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
		/>
	);
};
