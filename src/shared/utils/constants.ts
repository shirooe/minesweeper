import { DifficultData, DifficultType } from '../interfaces/data.interface';

export const difficult: Record<DifficultType, DifficultData> = {
  easy: {
    col: 8,
    row: 8,
    mines: 8,
    time: 10,
  },
  medium: {
    col: 16,
    row: 16,
    mines: 40,
    time: 40,
  },
  hard: {
    col: 16,
    row: 32,
    mines: 99,
    time: 100,
  },
};

export const FIELD = {
  MINE: '💣',
};

export const GAME_STATUS = {
  WIN: '😎',
  PENDING: '🤫',
  LOSE: '😫',
};
