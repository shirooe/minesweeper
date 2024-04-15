import { FIELD } from '@/shared/constants';
import { randomInteger } from '@/shared/utils';
import type { Field } from '@/shared/types';

export const placeMines = (board: Field[][], mines: number) => {
  const [rows, cols] = [board.length - 1, board[0].length - 1];

  for (let i = 0; i < mines; i++) {
    const [x, y] = [randomInteger(0, rows), randomInteger(0, cols)];

    // при повторяющихся координатах, повторить итерацию
    if (board[x][y].value === FIELD.MINE) {
      i--;
    }
    board[x][y].value = FIELD.MINE;
  }
};
