// hooks
import { useSidenav } from './useSidenav.hook';
// layouts
import { ScrollLayout } from '@/shared/layouts';
// components
import { NavItem, NavItemProps } from '../NavItem';
import { ThemeSwitcher } from '@/app/providers/themes';
// types
import { SidenavState } from './sidenav.type';
// utils
import { classNames } from '@/shared/utils';
// assets
import { imagotypeSrc, isotypeSrc } from '@/assets';
import { mdiDomain, mdiHomeCircle } from '@mdi/js';

const Sidenav = () => {
    const { sidenavState } = useSidenav();

    const branding: Record<SidenavState, JSX.Element> = {
        extended: <img className="w-40" src={imagotypeSrc} alt="logo" />,
        shrinked: <img className="w-10" src={isotypeSrc} alt="logo" />,
        hidden: <></>,
    };

    const navItemList: NavItemProps[] = [
        {
            to: '',
            icon: mdiHomeCircle,
            label: 'Home',
        },
        {
            to: 'companies',
            icon: mdiDomain,
            label: 'Tech companies',
        },
    ];

    return (
        <aside
            className={classNames(
                'flex flex-col items-center min-w-10 bg-base-900 text-base-200 overflow-hidden',
                sidenavState === 'hidden' && 'hidden',
                sidenavState === 'extended' && 'w-64 min-w-64'
            )}
        >
            <figure className="my-8">{branding[sidenavState]}</figure>

            <ScrollLayout className="flex-grow w-full">
                <div className="flex flex-col gap-2">
                    {navItemList.map(item => (
                        <NavItem key={item.to} hideLabel={sidenavState !== 'extended'} {...item} />
                    ))}
                </div>
            </ScrollLayout>

            <ThemeSwitcher className="my-8" hideHint={sidenavState !== 'extended'} />
        </aside>
    );
};

export default Sidenav;
