import { DifficultData, Position } from '@/shared/interfaces';
import { createBoard, openCells } from '@/shared/utils';
import { useState } from 'react';
import { Cell } from '../Cell';
import { Timer } from '../Timer';
import styles from './index.module.scss';

interface BoardProps {
  data: DifficultData;
}

export const Board = ({ data }: BoardProps) => {
  const [board, setBoard] = useState(() => createBoard(data));

  const onLeftClick = ({ x, y }: Position) => {
    setBoard((prev) => openCells(prev, { x, y }));
  };

  return (
    <div>
      <div className={styles.board}>
        {board.map((row, x) => (
          <div key={x} className={styles.row}>
            {row.map((field, y) => (
              <div onClick={() => onLeftClick({ x, y })} key={y}>
                <Cell field={field} key={y} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <Timer endtime={data.time} />
    </div>
  );
};
