import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';

export const Header = () => {
  const switchStyle = ({ isActive }: { isActive: boolean }) => {
    return isActive ? { color: '#faad14' } : { color: '#14213d' };
  };

  return (
    <div className={styles.header}>
      <NavLink style={switchStyle} to="/">
        Game
      </NavLink>
      <NavLink style={switchStyle} to="/leaders">
        Leaders
      </NavLink>
    </div>
  );
};
