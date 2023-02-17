import { Settings } from '@/components/Settings';
import { DifficultData } from '@/shared/interfaces/data.interface';
import { difficult } from '@/shared/utils/constants';
import { useState } from 'react';

export const Main = () => {
  const [username, setUsername] = useState<string>('');
  const [data, setData] = useState<DifficultData>(difficult['easy']);

  const handleSetData = (data: DifficultData, username: string) => {
    setData(data);
    setUsername(username);
  };

  return (
    <>
      <Settings handleSetData={handleSetData} />
    </>
  );
};
