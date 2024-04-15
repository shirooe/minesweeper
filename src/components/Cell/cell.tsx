import cn from 'classnames';
import { FIELD } from '@/shared/constants';
import styles from './cell.module.scss';
import type { Field } from '@/shared/types';

interface CellProps {
  field: Field;
}

export const Cell = ({ field }: CellProps) => {
  const { value, isOpened, isFlagged, isMarked } = field;

  return (
    <div
      className={cn(
        styles.cell,
        isOpened && {
          [styles.opened]: true,
          [styles.mine]: value === FIELD.MINE,
          [styles[`color-${value}`]]: value,
        },
      )}
    >
      {isMarked && '❓'}
      {isFlagged && '🚩'}
      {isOpened && value}
    </div>
  );
};
