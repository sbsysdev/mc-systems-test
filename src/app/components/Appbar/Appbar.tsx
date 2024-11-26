// hooks
import { useSidenav } from '../Sidenav';
// components
import { Button, Icon } from '@/shared/components';
// utils
import { mdiMenuClose, mdiMenuOpen } from '@mdi/js';

const Appbar = () => {
    const { isSideOpen, toggleSidenav } = useSidenav();

    return (
        <header className="flex flex-row px-4 py-2 bg-base-100 theme-dark:bg-base-700">
            <Button onClick={toggleSidenav}>
                <Icon className="text-xl" path={isSideOpen ? mdiMenuOpen : mdiMenuClose} />
            </Button>
        </header>
    );
};

export default Appbar;
