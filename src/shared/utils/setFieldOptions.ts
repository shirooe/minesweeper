import produce from 'immer';
import type { Field, Position } from '@/shared/types';

export const setFieldOptions = (
  board: Field[][],
  { x, y }: Position,
  value: 'isMarked' | 'isFlagged',
) => {
  return produce(board, (draft) => {
    if (draft[x][y].isOpened === false) {
      draft[x][y][value] = !draft[x][y][value];
    }
  });
};
