import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../contexts/user/use-user-context.hook';

interface IProps {
    children: React.ReactElement;
}

export default function MainLayoutGuard({ children }: IProps) {
    const { user } = useUserContext();
    const navigate = useNavigate();

    if (!user) {
        navigate('/login');
        return;
    }

    return children;
}
