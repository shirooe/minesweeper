import { Header } from '@/components/Header';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import styles from './styles/index.module.scss';

export const Home = () => {
  return (
    <Layout className={styles.layout}>
      <Header />
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};
