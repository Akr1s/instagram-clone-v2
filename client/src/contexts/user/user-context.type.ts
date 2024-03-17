import { Dispatch, SetStateAction } from 'react';
import { IUser } from '../../interfaces/user.interface';

export interface IUserContext {
    user: IUser;
    setUser: Dispatch<SetStateAction<IUser>>;
}
