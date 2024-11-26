// components
import { Button, Icon } from '@/shared/components';
// utils
import { mdiMenuClose, mdiMenuOpen } from '@mdi/js';

const Appbar = () => {
    const state = true;

    return (
        <header className="flex flex-row px-4 py-2 bg-base-100 theme-dark:bg-base-700">
            <Button>
                <Icon className="text-xl" path={state ? mdiMenuClose : mdiMenuOpen} />
            </Button>
        </header>
    );
};

export default Appbar;
