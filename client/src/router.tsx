import { createBrowserRouter } from 'react-router-dom';
import Login from './views/login';
import Registration from './views/registration';
import MainLayoutGuard from './guards/main-layout.guard';
import MainLayout from './layouts/main-layout.component';
import Feed from './views/feed';

export const router = createBrowserRouter([
    {
        path: 'login',
        Component: Login,
    },
    {
        path: 'reugistration',
        Component: Registration,
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
