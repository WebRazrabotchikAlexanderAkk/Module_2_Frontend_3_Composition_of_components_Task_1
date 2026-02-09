import { FieldLayout } from './fieldLayout';
import styles from './field.module.css';

export const Field = () => {
	const field = new Array(9).fill('');
	return (
		<div className={styles.container}>
			<FieldLayout field={field} />
		</div>
	);
};
