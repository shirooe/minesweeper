import { DifficultData, DifficultType } from '../interfaces/data.interface';

export const difficult: Record<DifficultType, DifficultData> = {
  easy: {
    col: 8,
    row: 8,
    mines: 10,
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
    mines: 100,
    time: 100,
  },
};

export const FIELD = {
  MINE: '💣',
};
