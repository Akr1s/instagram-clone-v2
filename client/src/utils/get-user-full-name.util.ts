import { IUser } from '../interfaces/user.interface';

export const getUserFullName = (user: IUser): string => {
    return `${user.firstName} ${user.lastName}`;
};
