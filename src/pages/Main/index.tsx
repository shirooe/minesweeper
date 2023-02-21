import { Game } from '@/components/Game';
import { Settings } from '@/components/Settings';
import { DifficultData } from '@/shared/interfaces/data.interface';
import { difficult } from '@/shared/utils';
import { useState } from 'react';

export const Main = () => {
  const [username, setUsername] = useState('');
  const [data, setData] = useState<DifficultData>(difficult['easy']);
  const [gameState, setGameState] = useState<boolean>(false);

  const changeGameState = () => {
    setGameState((prev) => !prev);
  };

  const handleSetData = (data: DifficultData, username: string) => {
    setData(data);
    setUsername(username);
    changeGameState();
  };

  return (
    <>
      {gameState ? (
        <Game data={data} changeGameState={changeGameState} username={username} />
      ) : (
        <Settings handleSetData={handleSetData} />
      )}
    </>
  );
};
