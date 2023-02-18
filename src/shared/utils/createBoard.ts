import { DifficultData, Field } from '../interfaces';
import { placeMines } from './placeMines';

export const createBoard = ({ col, row, mines }: DifficultData): Field[][] => {
  const board = new Array(row).fill(null).map((row, i) => {
    return new Array(col).fill(null).map((col, j) => {
      return {
        value: '',
        position: {
          x: row,
          y: col,
        },
        isOpened: false,
        isFlagged: false,
        isMine: false,
      };
    });
  });

  placeMines(board, mines);
  return board;
};
