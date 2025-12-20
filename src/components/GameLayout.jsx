import { Field, Information } from './index';

export const GameLayout = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	isDraw,
	setIsDraw,
}) => {
	return (
		<>
			<Field field={field} setField={setField} currentPlayer={currentPlayer} />
			<Information
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				isGameEnded={isGameEnded}
				setIsGameEnded={setIsGameEnded}
				isDraw={isDraw}
				setIsDraw={setIsDraw}
			/>
		</>
	);
};
