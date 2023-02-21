import { UserContext } from '@/shared/context/user';
import { DifficultData, Position } from '@/shared/interfaces';
import {
  createBoard,
  FIELD,
  GAME_STATUS,
  openCells,
  setFieldOptions,
} from '@/shared/utils';
import { checkWinStatus } from '@/shared/utils/checkWinStatus';
import { saveRecord } from '@/shared/utils/saveRecord';
import { Button, Typography } from 'antd';
import { MouseEvent, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Board } from '../Board';
import { Timer } from '../Timer';
import styles from './index.module.scss';

interface GameProps {
  data: DifficultData;
  changeGameState: () => void;
  username: string;
}

export const Game = ({ data, changeGameState, username }: GameProps) => {
  const { users, setUsers } = useContext(UserContext);
  const [board, setBoard] = useState(() => createBoard(data));
  const [mines, setMines] = useState(data.mines);
  const [flagged, setFlagged] = useState(0);
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.PENDING);
  // FIX: I NEED REFACTOOOOOR 😡
  // maybe all component 🥹
  const [id, setId] = useState(uuid);

  const handleReset = () => {
    setBoard(() => createBoard(data));
    setMines(() => data.mines);
    setId(() => uuid());
    setGameStatus(GAME_STATUS.PENDING);
  };

  const saveWinner = (time: number) => {
    const user = users.find((user) => user.name === username);

    if ((user && user.time > time) || !user) {
      const newUser = { name: username, time };
      const updated = saveRecord(users, username, newUser);
      setUsers(updated);
      localStorage.setItem('users', JSON.stringify(updated));
    }
  };

  const onLeftClick = ({ x, y }: Position) => {
    const updatedBoard = openCells(board, { x, y });
    setBoard(updatedBoard);

    if (board[x][y].value === FIELD.MINE) {
      setGameStatus(GAME_STATUS.LOSE);
    }

    if (checkWinStatus(updatedBoard, mines)) {
      setGameStatus(GAME_STATUS.WIN);
    }
  };

  const onRightClick = (e: MouseEvent<HTMLDivElement>, { x, y }: Position) => {
    e.preventDefault();

    if (board[x][y].isFlagged) {
      setFlagged((prev) => prev + 1);
      setBoard((prev) => setFieldOptions(prev, { x, y }, 'isMarked'));
    }

    if (board[x][y].isMarked) {
      setFlagged((prev) => prev - 1);
      setBoard((prev) => setFieldOptions(prev, { x, y }, 'isMarked'));
    } else {
      setBoard((prev) => setFieldOptions(prev, { x, y }, 'isFlagged'));
    }
  };

  return (
    <>
      <Typography.Title level={4} className={styles.title}>
        Статус игры: {gameStatus}
      </Typography.Title>
      <div className={styles.wrapper}>
        <Board board={board} onLeftClick={onLeftClick} onRightClick={onRightClick} />
        <div className={styles.inner}>
          <Typography.Text>Количество мин: {mines + flagged}</Typography.Text>
          <Timer
            endtime={data.time}
            gameStatus={gameStatus}
            key={id}
            saveWinner={saveWinner}
          />
          <Button onClick={handleReset}>Начать заново</Button>
          <Button onClick={changeGameState}>Вернуться в меню</Button>
        </div>
      </div>
    </>
  );
};
