import { GameData, GameType } from '../types/data';

export const difficulty: Record<GameType, GameData> = {
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

export const label: Record<string, string> = {
  easy: 'Простой 8x8, 10 мин',
  medium: 'Средний 16x16, 40 мин',
  hard: 'Сложный 32x16, 100 мин',
};
