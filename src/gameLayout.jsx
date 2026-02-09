import styles from './game.module.css';
import { Field, Information } from './components/';

export const GameLayout = () => {
	return (
		<div className={styles.game}>
			<Information />
			<Field />
			<button className={styles.restartButton}>Начать заново</button>
		</div>
	);
};
