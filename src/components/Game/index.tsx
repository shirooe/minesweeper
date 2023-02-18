import { Typography } from 'antd';
import { DifficultData } from '@/shared/interfaces';
import { Board } from '../Board';
import styles from './index.module.scss';

interface GameProps {
  data: DifficultData;
  changeGameState: () => void;
}

export const Game = ({ data, changeGameState }: GameProps) => {
  return (
    <>
      <Typography.Title level={4} className={styles.title}>
        Статус игры:
      </Typography.Title>
      <Board data={data} />
    </>
  );
};
