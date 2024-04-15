import { Header } from '@/components';
import { Layout as AntLayout } from 'antd';
import { Outlet } from 'react-router-dom';
import styles from './index.module.scss';

export const Layout = () => {
  return (
    <AntLayout className={styles.layout}>
      <Header />
      <AntLayout.Content>
        <Outlet />
      </AntLayout.Content>
    </AntLayout>
  );
};
