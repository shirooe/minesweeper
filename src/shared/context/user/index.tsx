import { User } from '@/shared/interfaces/user.interface';
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react';

type UserContextType = { users: User[]; setUsers: Dispatch<SetStateAction<User[]>> };

export const UserContext = createContext({} as UserContextType);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [users, setUsers] = useState<User[]>(
    JSON.parse(localStorage.getItem('users') || '[]'),
  );

  return (
    <UserContext.Provider value={{ users, setUsers }}>{children}</UserContext.Provider>
  );
};
