import React from 'react';
import { useUserContext } from '../contexts/user/use-user-context.hook';
import { Navigate } from 'react-router-dom';

interface IProps {
    children: React.ReactElement;
}

export default function MainLayoutGuard({ children }: IProps) {
    const { user } = useUserContext();

    return <>{user ? children : <Navigate to="/login" />}</>;
}
