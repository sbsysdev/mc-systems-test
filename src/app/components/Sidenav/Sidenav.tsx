// hooks
import { useSidenav } from './useSidenav.hook';
// layouts
import { ScrollLayout } from '@/shared/layouts';
// components
import { ThemeSwitcher } from '@/app/providers/themes';
// types
import { SidenavState } from './sidenav.type';
// utils
import { classNames } from '@/shared/utils';
// assets
import { imagotypeSrc, isotypeSrc } from '@/assets';

const Sidenav = () => {
    const { sidenavState } = useSidenav();

    const branding: Record<SidenavState, JSX.Element> = {
        extended: <img className="w-40" src={imagotypeSrc} alt="logo" />,
        shrinked: <img className="w-10" src={isotypeSrc} alt="logo" />,
        hidden: <></>,
    };

    return (
        <aside
            className={classNames(
                'flex flex-col items-center bg-base-900 text-base-200 overflow-hidden',
                sidenavState === 'hidden' && 'hidden',
                sidenavState === 'extended' && 'w-64'
            )}
        >
            <figure className="my-8">{branding[sidenavState]}</figure>

            <ScrollLayout className="flex-grow"></ScrollLayout>

            <ThemeSwitcher className="my-8" hideHint={sidenavState !== 'extended'} />
        </aside>
    );
};

export default Sidenav;
