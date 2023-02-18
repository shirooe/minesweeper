import { Field } from '../interfaces';
import { FIELD } from './constants';
import { randomInteger } from './randomInteger';

export const placeMines = (board: Field[][], mines: number) => {
  const [rows, cols] = [board.length - 1, board[0].length - 1];

  for (let i = 0; i < mines; i++) {
    const [x, y] = [randomInteger(rows), randomInteger(cols)];

    // при повторяющихся координатах, повторить итерацию
    if (board[x][y].value === FIELD.MINE) {
      i--;
    }
    board[x][y].value = FIELD.MINE;
  }
};
