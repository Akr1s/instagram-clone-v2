import { Outlet } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowRight from '@mui/icons-material/KeyboardDoubleArrowRight';
import Box from '@mui/material/Box';
import Navbar from '../components/navbar.component';

const drawerWidth = 250;

const classes = {
    root: {
        backgroundColor: 'background.default',
        color: 'text.primary',
        display: 'flex',
        minHeight: '100vh',
        padding: 4,
        boxSizing: 'border-box',
    },
    main: {
        flex: 1,
        backgroundColor: 'background.paper',
        borderRadius: 4,
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
    },
    drawer: {
        display: { xs: 'none', md: 'block' },
        '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: 'background.default',
        },
    },
    mobileDrawer: {
        display: { xs: 'block', md: 'none' },
        '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: 'background.default',
        },
        position: 'relative',
    },
    mobileDrawerButton: {
        position: 'absolute',
        left: -10,
        top: 5,
        display: { md: 'none' },
    },
};

export default function MainLayout() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    return (
        <Box sx={classes.root}>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onTransitionEnd={handleDrawerTransitionEnd}
                onClose={handleDrawerClose}
                ModalProps={{ keepMounted: true }}
                sx={classes.mobileDrawer}
            >
                <Navbar closeDrawer={handleDrawerClose} />
            </Drawer>
            <IconButton onClick={handleDrawerToggle} sx={classes.mobileDrawerButton}>
                <ArrowRight />
            </IconButton>
            <Drawer
                variant="permanent"
                sx={classes.drawer}
                open
                PaperProps={{ sx: { borderRight: 'none' } }}
            >
                <Navbar />
            </Drawer>
            <Box sx={classes.main}>
                <Outlet />
            </Box>
        </Box>
    );
}
