export interface GameData {
  col: number;
  row: number;
  mines: number;
  time: number;
}

export type GameType = 'easy' | 'medium' | 'hard';
