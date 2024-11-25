// react
import { configureStore } from '@reduxjs/toolkit';
// app reducers
import { themeReducer } from '../themes';
// modules reducers

// configure redux store
export const GlobalStore = configureStore({
    reducer: {
        theme: themeReducer,
    },
});
