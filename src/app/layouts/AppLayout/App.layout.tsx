// react
import { Outlet } from 'react-router';
// layouts
import { ScrollLayout } from '@/shared/layouts';
// components
import { Appbar, Sidenav } from '@/app/components';

const AppLayout = () => {
    return (
        <div className="flex flex-row overflow-hidden">
            <Sidenav />

            <ScrollLayout className="flex-grow gap-2" previous={<Appbar />}>
                <Outlet />
            </ScrollLayout>
        </div>
    );
};

export default AppLayout;
