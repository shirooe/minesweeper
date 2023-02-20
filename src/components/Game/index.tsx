import { DifficultData, Position } from '@/shared/interfaces';
import { createBoard, openCells, setFieldOptions } from '@/shared/utils';
import { Button, Typography } from 'antd';
import { MouseEvent, useState } from 'react';
import { Board } from '../Board';
import { Timer } from '../Timer';
import styles from './index.module.scss';
import { v4 as uuid } from 'uuid';

interface GameProps {
  data: DifficultData;
  changeGameState: () => void;
}

export const Game = ({ data, changeGameState }: GameProps) => {
  const [board, setBoard] = useState(() => createBoard(data));
  const [mines, setMines] = useState(data.mines);
  const [flagged, setFlagged] = useState(0);
  // FIX: I NEED REFACTOOOOOR 😡
  // maybe all component 🥹
  const [id, setId] = useState(uuid);

  const handleReset = () => {
    setBoard(() => createBoard(data));
    setMines(() => data.mines);
    setId(() => uuid());
  };

  const onLeftClick = ({ x, y }: Position) => {
    setBoard((prev) => openCells(prev, { x, y }));
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
        Статус игры:
      </Typography.Title>
      <div className={styles.wrapper}>
        <Board board={board} onLeftClick={onLeftClick} onRightClick={onRightClick} />
        <div className={styles.inner}>
          <Typography.Text>Количество мин: {mines + flagged}</Typography.Text>
          <Timer endtime={data.time} key={id} />
          <Button onClick={handleReset}>Начать заново</Button>
          <Button onClick={changeGameState}>Вернуться в меню</Button>
        </div>
      </div>
    </>
  );
};
