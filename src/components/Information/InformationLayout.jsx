import React from 'react';
import styles from './information.module.css';
import PropTypes from 'prop-types';
import { PLAYER_X, PLAYER_O } from '../../utils/constants';

// currentPlayer может быть только X или 0
const playerType = PropTypes.oneOf([PLAYER_X, PLAYER_O]);

const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
	if (isDraw) return <p className={styles.informationText}>Ничья</p>;
	if (isGameEnded)
		return <p className={styles.informationText}>Победа: {currentPlayer}</p>;
	return <p className={styles.informationText}>Ходит: {currentPlayer}</p>;
};

InformationLayout.propTypes = {
	currentPlayer: playerType.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
};

export default InformationLayout;
