import { DifficultData, Field } from '../interfaces';
import { placeMines } from './placeMines';
import { setMinesCount } from './setCountMines';

export const createBoard = ({ col, row, mines }: DifficultData): Field[][] => {
  const board = new Array(row).fill(null).map(() => {
    return new Array(col).fill(null).map(() => {
      return {
        value: '',
        isOpened: false,
        isFlagged: false,
      };
    });
  });

  placeMines(board, mines);
  setMinesCount(board);

  return board;
};
