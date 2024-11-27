// react
import { Suspense } from 'react';
// routes
import { ROUTES } from './routes';
// types
import { RouterProvider } from 'react-router';

const RoutesProvider = () => {
    // TODO: fallback
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <RouterProvider router={ROUTES} />
        </Suspense>
    );
};

export default RoutesProvider;
