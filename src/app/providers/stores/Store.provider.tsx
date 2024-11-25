// react
import { memo } from 'react';
import { Provider } from 'react-redux';
// store
import { GlobalStore } from './global.store';
// props
import { StoreProviderProps } from './store.type';
// utils
import { content } from '@/shared/utils';

const StoreProvider = memo(({ children }: StoreProviderProps) => {
    return <Provider store={GlobalStore}>{content(children)}</Provider>;
});

export default StoreProvider;
