import styles from './field.module.css';
export const FieldLayout = ({ field }) => {
	return (
		<div className={styles.field}>
			{field.map((cellPlayer, index) => (
				<button key={index} className={styles.cell}>
					{cellPlayer}
				</button>
			))}
		</div>
	);
};
