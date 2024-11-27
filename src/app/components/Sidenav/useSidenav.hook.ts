// react
import { useCallback, useEffect, useMemo, useState } from 'react';
// store
import { appActions, appState, useGlobalDispatch, useGlobalSelector } from '@/app/providers/stores';
// types
import { SidenavState } from './sidenav.type';

export const useSidenav = (breakPoint: number = 768) => {
    const { isSideOpen } = useGlobalSelector(appState);

    const [matchBreakPoint, setMatchBreakPoint] = useState<boolean>(false);

    const sidenavState = useMemo<SidenavState>(() => {
        if (isSideOpen) {
            if (matchBreakPoint) return 'extended';

            return 'shrinked';
        }

        if (matchBreakPoint) return 'shrinked';

        return 'hidden';
    }, [isSideOpen, matchBreakPoint]);

    const dispatch = useGlobalDispatch();

    const openSidenav = useCallback(() => dispatch(appActions.openSidenav()), [dispatch]);

    const closeSidenav = useCallback(() => dispatch(appActions.closeSidenav()), [dispatch]);

    const toggleSidenav = useCallback(
        () => (isSideOpen ? closeSidenav() : openSidenav()),
        [isSideOpen, closeSidenav, openSidenav]
    );

    // reactivity
    useEffect(() => {
        const currentMedia: MediaQueryList = window.matchMedia(`(min-width: ${breakPoint}px)`);

        setMatchBreakPoint(currentMedia.matches);

        const changeListener = (event: MediaQueryListEvent) => setMatchBreakPoint(event.matches);

        currentMedia.addEventListener('change', changeListener);

        return () => currentMedia.removeEventListener('change', changeListener);
    }, [breakPoint]);

    return { isSideOpen, sidenavState, openSidenav, closeSidenav, toggleSidenav };
};
