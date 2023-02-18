export interface Field {
  value: string;
  position: Position;
  isOpened: boolean;
  isFlagged: boolean;
}

export interface Position {
  x: number;
  y: number;
}
