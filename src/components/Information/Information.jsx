import React from 'react';
import InformationLayout from './InformationLayout';
import PropTypes from 'prop-types';

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

Information.propTypes = {
	currentPlayer: PropTypes.string.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
};

export default Information;
