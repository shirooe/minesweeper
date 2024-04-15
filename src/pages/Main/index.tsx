import { Game, Settings } from '@/components';
import { difficulty } from '@/shared/constants';
import type { GameData } from '@/shared/types';
import { useState } from 'react';

export const Main = () => {
  const [username, setUsername] = useState('');
  const [data, setData] = useState<GameData>(difficulty['easy']);
  const [gameState, setGameState] = useState<boolean>(false);

  const changeGameState = () => {
    setGameState((prev) => !prev);
  };

  const handleSetData = (data: GameData, username: string) => {
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
