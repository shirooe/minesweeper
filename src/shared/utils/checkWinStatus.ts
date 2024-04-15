import type { Field } from '@/shared/types';

export const checkWinStatus = (board: Field[][], mines: number) => {
  const flatted = board.flat();
  const opened = flatted.filter((field) => field.isOpened);

  return flatted.length === opened.length + mines;
};
