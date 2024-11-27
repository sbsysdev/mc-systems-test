// react
import { NavLink } from 'react-router';
// types
import { NavItemProps } from './navItem.type';
// components
import { Icon } from '@/shared/components';
// utils
import { classNames } from '@/shared/utils';
// assets
import { mdiArrowRightCircle } from '@mdi/js';

const NavItem = ({ to, icon, label, hideLabel = false }: NavItemProps) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                classNames(
                    'group flex flex-row gap-4 items-center p-2 rounded-l-xl hover:bg-base-200 theme-dark:hover:bg-base-800 hover:text-base-700 theme-dark:hover:text-base-300',
                    isActive && 'bg-base-200 theme-dark:bg-base-800 text-base-700 theme-dark:text-base-300'
                )
            }
            title={label}
        >
            {({ isActive }) => (
                <>
                    <span className="text-2xl">
                        <Icon path={icon} />
                    </span>

                    {!hideLabel && <span className="flex-grow font-medium">{label}</span>}

                    {!isActive && !hideLabel && (
                        <span className="text-2xl hidden group-hover:inline">
                            <Icon path={mdiArrowRightCircle} />
                        </span>
                    )}
                </>
            )}
        </NavLink>
    );
};

export default NavItem;
