// react
import { configureStore } from '@reduxjs/toolkit';
// app reducers
import { appReducer } from './global.reducer';
// modules reducers

// configure redux store
export const GlobalStore = configureStore({
    reducer: {
        app: appReducer,
    },
});
