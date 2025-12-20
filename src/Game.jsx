// Game (или App) — корневой компонент. Будет выводить компоненты Information, Field, а также кнопку «Начать заново».

import { GameLayout } from './components/GameLayout';
import styles from './game.module.css';

export const Game = () => {
	// Выведите данные. Передаем состояния в нужные компоненты (через промежуточные компоненты) и выводим в шаблон:

	// FieldLayout выводит массив field (с помощью метода map());
	// InformationLayout выводит статус:
	// Если isDraw равен true — 'Ничья';
	// Если isDraw равен false, но isGameEnded равен true — `Победа: ${currentPlayer}`;
	// Если isDraw равен false и isGameEnded равен false — `Ходит: ${currentPlayer}`.

	const { currentPlayer, setCurrentPlayer } = useState('X');
	{
		/* кто ходит в данный момент */
	}
	const { isGameEnded, setIsGameEnded } = useState(false);
	{
		/* была ли завершена игра */
	}
	const { isDraw, setIsDraw } = useState(false);
	{
		/* была ли ничья */
	}
	const { field, setField } = useState(['', '', '', '', '', '', '', '', '']);
	{
		/* массив клеток игрового поля */
	}

	return (
		<>
			<div className={styles.game}>
				<h1>Games X and 0</h1>
				<GameLayout
					field={field}
					setField={setField}
					currentPlayer={currentPlayer}
					setCurrentPlayer={setCurrentPlayer}
					isGameEnded={isGameEnded}
					setIsGameEnded={setIsGameEnded}
					isDraw={isDraw}
					setIsDraw={setIsDraw}
				/>
				<button>Начать заного</button>
			</div>
		</>
	);
};
