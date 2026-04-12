import React from 'react';
import FieldLayout from './FieldLayout';
import PropTypes from 'prop-types';

const Field = ({ field, onCellClick, isGameEnded }) => {
	return (
		<div className="field">
			<FieldLayout field={field} onCellClick={onCellClick} isGameEnded={isGameEnded} />
		</div>
	);
};

Field.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	onCellClick: PropTypes.func.isRequired,
	isGameEnded: PropTypes.bool,
};

export default Field;
