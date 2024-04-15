import { FIELD } from '@/shared/constants';
import type { Field } from '@/shared/types';

export const setMinesCount = (board: Field[][]) => {
  const width = board.length;
  const height = board[0].length;

  board.forEach((row, x) => {
    row.forEach((_, y) => {
      let count = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          const axisX = i + x;
          const axisY = j + y;

          if (axisX >= 0 && axisY >= 0 && axisX < width && axisY < height) {
            if (board[axisX][axisY].value === FIELD.MINE) {
              count++;
            }
            if (board[x][y].value !== FIELD.MINE) {
              board[x][y].value = count === 0 ? '' : count;
            }
          }
        }
      }
    });
  });
};
