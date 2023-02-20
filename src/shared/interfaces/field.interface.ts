export interface Field {
  value: string | number;
  isOpened: boolean;
  isMarked: boolean;
  isFlagged: boolean;
}

export interface Position {
  x: number;
  y: number;
}
