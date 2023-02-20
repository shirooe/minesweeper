import { padStart } from '@/shared/utils';
import { Typography } from 'antd';
import { useEffect, useState } from 'react';

interface TimerProps {
  endtime: number;
}

export const Timer = ({ endtime }: TimerProps) => {
  const [minutes, setMinutes] = useState<number>(endtime);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const currentTime = new Date();
    const end = new Date(currentTime.getTime() + endtime * 60000);
    const timer = setInterval(() => {
      const time = end.getTime() - Date.now() + 1000;
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [endtime]);

  return (
    <Typography.Title level={4} style={{ margin: 0 }}>
      {padStart(minutes)}:{padStart(seconds)}
    </Typography.Title>
  );
};
