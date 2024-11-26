// react
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// store
import { GlobalState } from '../stores';
// types
import { ThemePreference } from '../themes';

interface AppState {
    theme: ThemePreference;
    isSideOpen: boolean;
}

const initialAppState: AppState = {
    theme: 'os',
    isSideOpen: true,
};

const appSlice = createSlice({
    name: 'app',
    initialState: initialAppState,
    reducers: {
        setTheme: (state, action: PayloadAction<ThemePreference>) => {
            state.theme = action.payload;
        },
        openSidenav: state => {
            state.isSideOpen = true;
        },
        closeSidenav: state => {
            state.isSideOpen = false;
        },
    },
});

export const appReducer = appSlice.reducer;
export const appState = (state: GlobalState) => state.app;
export const appActions = appSlice.actions;
