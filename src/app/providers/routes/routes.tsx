// react
import { createBrowserRouter } from 'react-router';
// components
import { AppLayout } from '@/app/layouts';
// views
import { NotFoundView, WelcomeView } from '@/app/views';
import { CompanyListView } from '@/modules/financial/views';

// eslint-disable-next-line react-refresh/only-export-components
export const ROUTES = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <NotFoundView />,
        children: [
            {
                path: '',
                element: <WelcomeView />,
            },
            {
                path: 'companies',
                element: <CompanyListView />,
            },
        ],
    },
]);
