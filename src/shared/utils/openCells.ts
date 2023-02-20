import produce from 'immer';
import { Field, Position } from '../interfaces';
import { FIELD } from './constants';

export const openCells = (board: Field[][], { x, y }: Position) => {
  return produce(board, (draft) => {
    draft.forEach((row, i) => {
      row.forEach((_, j) => {
        if (draft[x][y].isFlagged === true) return;

        if (draft[x][y].value === FIELD.MINE) {
          draft[i][j].isOpened = true;
        }

        if (draft[x][y].value === '') {
          const queue = [{ x, y }];
          revealEmptyCells(queue, draft);
        }

        draft[x][y].isOpened = true;
      });
    });
  });
};

const revealEmptyCells = (queue: Position[], board: Field[][]) => {
  const visited = new Set();
  const width = board.length;
  const height = board[0].length;

  while (queue.length > 0) {
    const cell = queue.shift();
    const { x, y } = cell!!;
    const key = `${x}-${y}`;

    if (visited.has(key)) {
      continue;
    }

    visited.add(key);

    if (board[x][y].value !== '') {
      continue;
    }

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const axisX = i + x;
        const axisY = j + y;
        if (axisX >= 0 && axisY >= 0 && axisX < width && axisY < height) {
          board[axisX][axisY].isOpened = true;
        }

        if (
          axisX < 0 ||
          axisX >= width ||
          axisY < 0 ||
          axisY >= height ||
          (i === 0 && j === 0)
        ) {
          continue;
        }

        queue.push({ x: axisX, y: axisY });
      }
    }
  }
};
