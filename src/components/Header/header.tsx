import { NavLink } from 'react-router-dom';
import styles from './header.module.scss';
import { COLORS } from '@/shared/constants';

interface NavLinkProps {
  isActive: boolean;
}

export const Header = () => {
  const switchStyle = ({ isActive }: NavLinkProps) => {
    return isActive ? { color: COLORS.primary } : { color: COLORS.secondary };
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
