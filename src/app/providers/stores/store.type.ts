// store
import { GlobalStore } from './global.store';
// types
import { Slot } from '@/shared/types';

export interface StoreProviderProps {
    children?: Slot;
}

// store types
export type GlobalState = ReturnType<typeof GlobalStore.getState>;
export type GlobalDispatch = typeof GlobalStore.dispatch;
