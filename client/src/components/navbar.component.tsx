import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthService } from '../services/auth.service';
import SettingsIcon from '@mui/icons-material/Settings';
import Profile from './profile.component';

interface IProps {
    closeDrawer?: () => void;
}

const classes = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    },
};

const sections = [
    { id: 'feed', path: 'feed', label: 'Feed', Icon: HomeIcon },
    { id: 'explore', path: 'explore', label: 'Explore', Icon: SearchIcon },
    { id: 'reels', path: 'reels', label: 'Reels', Icon: VideoLibraryIcon },
    { id: 'settings', path: 'settings', label: 'Settings', Icon: SettingsIcon },
];

export default function Navbar({ closeDrawer }: IProps) {
    const navigate = useNavigate();

    const handleClick = (path: string) => {
        navigate(`/${path}`);
        closeDrawer?.();
    };

    const handleLogout = (): void => {
        AuthService.signOut().then(() => {
            handleClick('login');
        });
    };

    return (
        <Box sx={classes.root}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Profile />
                <List>
                    {sections.map(({ id, path, label, Icon }) => (
                        <ListItem key={id} disablePadding>
                            <ListItemButton onClick={() => handleClick(path)}>
                                <ListItemIcon>
                                    <Icon />
                                </ListItemIcon>
                                <ListItemText primary={label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={handleLogout}>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
}
