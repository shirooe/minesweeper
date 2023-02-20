import cn from 'classnames';
import { Field } from '@/shared/interfaces';
import styles from './index.module.scss';
import { FIELD } from '@/shared/utils';

interface CellProps {
  field: Field;
}

export const Cell = ({ field }: CellProps) => {
  const { value, isOpened, isFlagged, isMarked } = field;

  return (
    <div
      className={cn(styles.cell, {
        [styles.opened]: isOpened,
        [styles.mine]: value === FIELD.MINE && isOpened,
        [styles[`color-${value}`]]: value,
      })}
    >
      {isMarked && '❓'}
      {isFlagged && '🚩'}
      {isOpened && value}
    </div>
  );
};
