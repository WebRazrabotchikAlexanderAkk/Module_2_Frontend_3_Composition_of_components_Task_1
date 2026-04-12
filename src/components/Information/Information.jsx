import React from 'react';
import InformationLayout from './InformationLayout';
import PropTypes from 'prop-types';
import { PLAYER_X, PLAYER_O } from '../../utils/constants';

// currentPlayer может быть только X или 0
const playerType = PropTypes.oneOf([PLAYER_X, PLAYER_O]);

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
	currentPlayer: playerType.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
};

export default Information;
