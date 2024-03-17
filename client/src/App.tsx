import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import UserContextProvider from './contexts/user';
import CustomThemeProvider from './theme/custom-theme.provider';

export default function App() {
    return (
        <UserContextProvider>
            <CustomThemeProvider>
                <RouterProvider router={router} />
            </CustomThemeProvider>
        </UserContextProvider>
    );
}
