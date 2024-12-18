// types
import { ThemePreference, ThemeSwitcherProps } from './theme.type';
// utils
import { classNames } from '@/shared/utils';
// hooks
import { useTheme } from './useTheme.hook';
// components
import { Icon } from '@/shared/components';
// assets
import { mdiLightbulbNight, mdiLightbulbOn, mdiThemeLightDark } from '@mdi/js';

const ThemeSwitcher = ({ className, hideHint = false }: ThemeSwitcherProps) => {
    const { theme, changeTheme } = useTheme();

    const themes: Record<ThemePreference, { iso: ThemePreference; icon: string; hint: string }> = {
        os: {
            iso: 'os',
            icon: mdiThemeLightDark,
            hint: 'System',
        },
        light: {
            iso: 'light',
            icon: mdiLightbulbOn,
            hint: 'Light',
        },
        dark: {
            iso: 'dark',
            icon: mdiLightbulbNight,
            hint: 'Dark',
        },
    };

    return (
        <ul
            className={classNames('grid rounded-sm', className)}
            style={{
                gridTemplateRows: `repeat(${Object.keys(themes).length}, minmax(0, 1fr))`,
            }}
        >
            {Object.keys(themes).map((themeKey, themeIndex) => {
                const currentTheme = themes[themeKey as ThemePreference];

                return (
                    <li key={themeIndex} className="flex flex-row">
                        <button
                            className="flex-grow flex flex-row items-center rounded-sm gap-2 px-2 py-1 transition-all disabled:bg-secondary-700 disabled:text-base-300 disabled:shadow-sm disabled:shadow-secondary-700"
                            type="button"
                            title={currentTheme.hint}
                            onClick={() => {
                                changeTheme(currentTheme.iso);
                            }}
                            disabled={currentTheme.iso === theme}
                        >
                            <span className="text-2xl">
                                <Icon path={currentTheme.icon} />
                            </span>

                            {!hideHint && <span className="font-medium text-center">{currentTheme.hint}</span>}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default ThemeSwitcher;
