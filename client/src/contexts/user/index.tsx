import { useState } from 'react';
import { IUser } from '../../interfaces/user.interface';
import { UserContext } from './user.context';

interface IProps {
    children: React.ReactElement;
}

export default function UserContextProvider({ children }: IProps) {
    const [user, setUser] = useState<IUser>(null);

    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}
