import { createBrowserRouter } from 'react-router-dom';
import Login from './views/auth/login.component';
import Registration from './views/auth/registration.component';
import MainLayoutGuard from './guards/main-layout.guard';
import MainLayout from './layouts/main-layout.component';
import Feed from './views/feed';
import AuthLayout from './layouts/auth-layout.component';

export const router = createBrowserRouter([
    {
        path: 'login',
        Component: AuthLayout,
        children: [
            {
                index: true,
                Component: Login,
            },
            {
                path: 'registration',
                Component: Registration,
            },
        ],
    },

    {
        id: 'root',
        path: '/',
        element: (
            <MainLayoutGuard>
                <MainLayout />
            </MainLayoutGuard>
        ),
        children: [
            {
                index: true,
                Component: Feed,
            },
        ],
    },
]);
