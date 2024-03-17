import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import UserContextProvider from './contexts/user';

export default function App() {
    return (
        <UserContextProvider>
            <RouterProvider router={router} />
        </UserContextProvider>
    );
}
