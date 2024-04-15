import { Field, Position } from '@/shared/types';
import { MouseEvent } from 'react';
import { Cell } from '@/components';
import styles from './board.module.scss';

interface BoardProps {
  board: Field[][];
  onLeftClick: ({ x, y }: Position) => void;
  onRightClick: (e: MouseEvent<HTMLDivElement>, { x, y }: Position) => void;
}

export const Board = ({ board, onLeftClick, onRightClick }: BoardProps) => {
  return (
    <div>
      <div className={styles.board}>
        {board.map((row, x) => (
          <div key={x} className={styles.row}>
            {row.map((field, y) => (
              <div
                onClick={() => onLeftClick({ x, y })}
                onContextMenu={(e) => onRightClick(e, { x, y })}
                key={y}
              >
                <Cell field={field} key={y} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
