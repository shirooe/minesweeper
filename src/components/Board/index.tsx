import { DifficultData } from '@/shared/interfaces';
import { createBoard } from '@/shared/utils';
import produce from 'immer';
import { useState } from 'react';
import { Cell } from '../Cell';
import styles from './index.module.scss';

interface BoardProps {
  data: DifficultData;
}

export const Board = ({ data }: BoardProps) => {
  const [board, setBoard] = useState(() => createBoard(data));

  const onLeftClick = (x: number, y: number) => {
    setBoard((prev) => {
      return produce(prev, (draft) => {
        draft[x][y].isOpened = true;
      });
    });
  };

  return (
    <div className={styles.board}>
      {board.map((row, x) => (
        <div key={x} className={styles.row}>
          {row.map((field, y) => (
            <div onClick={() => onLeftClick(x, y)} key={y}>
              <Cell field={field} key={y} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
