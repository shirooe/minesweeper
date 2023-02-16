import { ConfigProvider, Layout } from 'antd';
import { ReactNode } from 'react';

export const withAntd = (component: () => ReactNode) => () =>
  (
    <ConfigProvider theme={{ token: { colorPrimary: '#faad14' } }}>
      {component()}
    </ConfigProvider>
  );
