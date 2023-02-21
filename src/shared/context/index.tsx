import { PropsWithChildren } from 'react';
import { UserProvider } from './user';

export const Provider = ({ children }: PropsWithChildren) => {
  return <UserProvider>{children}</UserProvider>;
};
