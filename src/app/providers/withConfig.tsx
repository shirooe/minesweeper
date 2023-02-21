import { ConfigProvider } from 'antd';
import { ComponentProps, ComponentType } from 'react';

export const withAntd =
  <C extends ComponentType<any>>(Component: C) =>
  (props: ComponentProps<C>) =>
    (
      <ConfigProvider theme={{ token: { colorPrimary: '#faad14' } }}>
        <Component {...props} />
      </ConfigProvider>
    );
