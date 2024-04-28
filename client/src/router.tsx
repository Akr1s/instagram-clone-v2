import { Navigate, createBrowserRouter } from 'react-router-dom';
import Login from './views/auth/login.component';
import Registration from './views/auth/registration.component';
import MainLayoutGuard from './guards/main-layout.guard';
import MainLayout from './layouts/main-layout.component';
import Feed from './views/feed';
import AuthLayout from './layouts/auth-layout.component';
import Explore from './views/explore';
import Reels from './views/reels';
import Settings from './views/settings';

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
                element: <Navigate to="/feed" />,
            },
            {
                path: 'feed',
                Component: Feed,
            },
            {
                path: 'explore',
                Component: Explore,
            },
            {
                path: 'reels',
                Component: Reels,
            },
            {
                path: 'settings',
                Component: Settings,
            },
        ],
    },
]);
