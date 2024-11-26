// react
import { useCallback } from 'react';
// store
import { appActions, appState, useGlobalDispatch, useGlobalSelector } from '../stores';
// types
import { ThemePreference } from './theme.type';
// hooks
import { useLocalStorage } from '@/shared/hooks';

export const useTheme = () => {
    const [storedTheme, setThemeToLocalStorage] = useLocalStorage<ThemePreference>('theme', 'os');

    const { theme } = useGlobalSelector(appState);
    const dispatch = useGlobalDispatch();

    const changeTheme = useCallback(
        (currentTheme: ThemePreference) => {
            try {
                setThemeToLocalStorage(currentTheme);

                dispatch(appActions.setTheme(currentTheme));
            } catch (error) {
                console.error(error);
            }
        },
        [dispatch, setThemeToLocalStorage]
    );

    return { storedTheme, theme, changeTheme };
};
