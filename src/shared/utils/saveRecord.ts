import produce from 'immer';
import { User } from '../interfaces/user.interface';

export const saveRecord = (users: User[], name: string, newUser: User) => {
  return produce(users, (draft) => {
    const userIndex = draft.findIndex((user) => user.name === name);
    if (userIndex !== -1) {
      draft.splice(userIndex, 1, newUser);
    }
    draft.splice(0, 0, newUser);
  });
};
