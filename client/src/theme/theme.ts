import { ThemeOptions } from '@mui/material/styles';
import { ThemeModesEnum } from '../enums/theme-modes.enum';

export const lightTheme: ThemeOptions = {
    palette: {
        mode: ThemeModesEnum.LIGHT,
        background: {
            default: '#fff',
            paper: '#f6f6f6',
        },
        text: {
            primary: '#000',
            secondary: '#666',
        },
    },
    spacing: 4,
};

export const darkTheme: ThemeOptions = {
    palette: {
        mode: ThemeModesEnum.DARK,
        background: {
            default: '#272643',
            paper: '#679186',
        },
        text: {
            primary: '#fff',
        },
    },
    spacing: 4,
};
