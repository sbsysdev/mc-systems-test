// react
import { useCallback } from 'react';
// store
import { useGlobalDispatch, useGlobalSelector } from '../stores';
import { themeActions, themeState } from './theme.reducer';
// types
import { ThemePreference } from './theme.type';
// hooks
import { useLocalStorage } from '@/shared/hooks';

export const useTheme = () => {
    const [storedTheme, setThemeToLocalStorage] = useLocalStorage<ThemePreference>('theme', 'os');

    const { theme } = useGlobalSelector(themeState);
    const dispatch = useGlobalDispatch();

    const changeTheme = useCallback(
        (currentTheme: ThemePreference) => {
            try {
                setThemeToLocalStorage(currentTheme);

                dispatch(themeActions.setTheme(currentTheme));
            } catch (error) {
                console.error(error);
            }
        },
        [dispatch, setThemeToLocalStorage]
    );

    return { storedTheme, theme, changeTheme };
};
