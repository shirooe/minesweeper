import { Typography } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { GAME_STATUS } from '@/shared/constants';
import { padStart } from '@/shared/utils';

interface TimerProps {
  endtime: number;
  gameStatus: string;
  saveWinner: (time: number) => void;
}

export const Timer = ({ endtime, gameStatus, saveWinner }: TimerProps) => {
  const [minutes, setMinutes] = useState<number>(endtime);
  const [seconds, setSeconds] = useState<number>(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    const currentTime = new Date();
    const end = new Date(currentTime.getTime() + endtime * 60000);
    timerRef.current = setInterval(() => {
      const time = end.getTime() - Date.now() + 1000;
      setMinutes(Math.floor(time / 1000 / 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if ((minutes === 0 && seconds === 0) || gameStatus === GAME_STATUS.LOSE) {
      clearInterval(timerRef.current);
    }

    if (gameStatus === GAME_STATUS.WIN) {
      clearInterval(timerRef.current);
      const time = (endtime - minutes) * 60 - seconds;
      saveWinner(time);
    }
  }, [seconds]);

  return (
    <Typography.Title level={4} style={{ margin: 0 }}>
      {padStart(minutes)}:{padStart(seconds)}
    </Typography.Title>
  );
};
