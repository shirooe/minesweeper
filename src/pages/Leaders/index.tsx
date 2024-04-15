import { useContext } from 'react';
import { UserContext } from '@/shared/context';
import styles from './index.module.scss';

export const Leaders = () => {
  const { users } = useContext(UserContext);

  return (
    <>
      {[...users]
        .sort((a, b) => a.time - b.time)
        .slice(0, 9)
        .map((user) => (
          <div key={user.name} className={styles.leaders}>
            <div>{user.name}</div>
            <div>{user.time}</div>
          </div>
        ))}
    </>
  );
};
