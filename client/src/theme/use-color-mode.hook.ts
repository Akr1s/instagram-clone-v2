import { useContext } from 'react';
import { ColorModeContext } from './custom-theme.provider';

export const useColorMode = () => useContext(ColorModeContext);
