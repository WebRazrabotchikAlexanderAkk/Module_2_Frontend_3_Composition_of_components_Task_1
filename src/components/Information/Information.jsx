import React from 'react';
import InformationLayout from './InformationLayout';

const Information = ({ currentPlayer, isGameEnded, isDraw }) => {
	return (
		<div className="information">
			<InformationLayout
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
		</div>
	);
};

export default Information;
