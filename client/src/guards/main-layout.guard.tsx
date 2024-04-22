import React, { useEffect, useState } from 'react';
import { useUserContext } from '../contexts/user/use-user-context.hook';
import { Navigate } from 'react-router-dom';
import { CurrentUserService } from '../services/current-user.service';
import { Box, CircularProgress } from '@mui/material';

interface IProps {
    children: React.ReactElement;
}

const classes = {
    centered: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
    },
};

export default function MainLayoutGuard({ children }: IProps) {
    const { user, setUser } = useUserContext();

    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        CurrentUserService.getCurrentUser()
            .then(setUser)
            .catch(() => setUser(null))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <Box sx={{ width: '100vw', height: '100vh', position: 'relative' }}>
            {isLoading ? (
                <CircularProgress sx={classes.centered} />
            ) : user ? (
                children
            ) : (
                <Navigate to="/login" />
            )}
        </Box>
    );
}
