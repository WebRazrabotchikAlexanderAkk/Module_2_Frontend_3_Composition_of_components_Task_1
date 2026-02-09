import { InformationLayout } from './informationLayout';
import styles from './information.module.css';

export const Information = () => {
	const information = 'Ходит Крестик';
	return (
		<div className={styles.information}>
			<InformationLayout information={information} />
		</div>
	);
};
