import { createContext } from 'react';
import { IUserContext } from './user-context.type';

export const UserContext = createContext<IUserContext>(null);
