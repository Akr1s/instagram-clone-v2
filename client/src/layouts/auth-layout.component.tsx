import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';

const classes = {
    root: {
        backgroundColor: '#fd0154',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

export default function AuthLayout() {
    return (
        <Box sx={classes.root}>
            <Outlet />
        </Box>
    );
}
