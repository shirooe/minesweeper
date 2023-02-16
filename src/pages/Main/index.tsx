import { Settings } from '@/components/Settings';
import { IData } from '@/shared/interfaces/data.interface';
import { useState } from 'react';

export const Main = () => {
  const [username, setUsername] = useState<string>('');
  const [data, setData] = useState<IData>({ col: 8, row: 8, mines: 8 });

  const handleSetData = (data: IData, username: string) => {
    setData(data);
    setUsername(username);
  };

  return (
    <>
      <Settings handleSetData={handleSetData} />
    </>
  );
};
