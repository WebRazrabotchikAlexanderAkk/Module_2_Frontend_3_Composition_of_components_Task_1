import React from 'react';
import FieldLayout from './FieldLayout';
import PropTypes from 'prop-types';
import { PLAYER_X, PLAYER_O, EMPTY_CELL } from '../../utils/constants';

// Определяем тип для значения клетки — только X, 0 или пустая строка
const cellValue = PropTypes.oneOf([PLAYER_X, PLAYER_O, EMPTY_CELL]);

const Field = ({ field, onCellClick, isGameEnded }) => {
	return (
		<div className="field">
			<FieldLayout field={field} onCellClick={onCellClick} isGameEnded={isGameEnded} />
		</div>
	);
};

Field.propTypes = {
	field: PropTypes.arrayOf(cellValue).isRequired,
	onCellClick: PropTypes.func.isRequired,
	isGameEnded: PropTypes.bool,
};

export default Field;
