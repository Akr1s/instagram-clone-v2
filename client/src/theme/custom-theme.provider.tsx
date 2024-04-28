import React, { createContext, useMemo, useState } from 'react';
import { darkTheme, lightTheme } from './theme';
import { ThemeModesEnum } from '../enums/theme-modes.enum';
import { createTheme } from '@mui/material/styles';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

interface IProps {
    children: React.ReactElement;
}

interface IColorModeContext {
    toggleColorMode: () => void;
}

export const ColorModeContext = createContext<IColorModeContext>(null);

export default function CustomThemeProvider({ children }: IProps) {
    const [mode, setMode] = useState<ThemeModesEnum>(ThemeModesEnum.LIGHT);

    const theme = useMemo(
        () => createTheme(mode === ThemeModesEnum.LIGHT ? lightTheme : darkTheme),
        [mode],
    );

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prev) =>
                    prev === ThemeModesEnum.LIGHT ? ThemeModesEnum.DARK : ThemeModesEnum.LIGHT,
                );
            },
        }),
        [],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ColorModeContext.Provider>
    );
}
