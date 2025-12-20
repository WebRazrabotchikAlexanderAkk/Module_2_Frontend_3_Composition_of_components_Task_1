// Field — будет игровым полем с клетками, где каждая клетка представляет из себя кнопку. При нажатии на определенную клетку будет происходить ход одной из сторон;

import { FieldLayout } from './FieldLayout';

export const Field = ({ field, setField, currentPlayer }) => {
	return (
		<>
			<FieldLayout field={field} setField={setField} currentPlayer={currentPlayer} />
		</>
	);
};
