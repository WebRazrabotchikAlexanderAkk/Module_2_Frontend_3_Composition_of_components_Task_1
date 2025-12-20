export const FieldLayout = ({ field, setfield, currentPlayer }) => {
	return (
		<>
			{field.map((cell) => {
				// а для списка нужно указать ещё key
				<button
					onClick={() => {
						if (cell) {
							return;
						}
						setfield(currentPlayer);
					}}
				>
					cell
				</button>;
			})}
		</>
	);
};
