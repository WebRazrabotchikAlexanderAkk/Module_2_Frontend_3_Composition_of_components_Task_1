import React from 'react';
import styles from './information.module.css';
import PropTypes from 'prop-types';

const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
	if (isDraw) return <p className={styles.informationText}>Ничья</p>;
	if (isGameEnded)
		return <p className={styles.informationText}>Победа: {currentPlayer}</p>;
	return <p className={styles.informationText}>Ходит: {currentPlayer}</p>;
};

InformationLayout.propTypes = {
	currentPlayer: PropTypes.string.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
};

export default InformationLayout;
