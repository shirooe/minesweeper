import { placeMines } from './placeMines';
import { setMinesCount } from './setCountMines';
import type { GameData, Field } from '@/shared/types';

export const createBoard = ({ col, row, mines }: GameData): Field[][] => {
  const board = Array.from({ length: row }, () =>
    Array.from({ length: col }, () => ({
      value: '',
      isOpened: false,
      isMarked: false,
      isFlagged: false,
    })),
  );

  placeMines(board, mines);
  setMinesCount(board);

  return board;
};
