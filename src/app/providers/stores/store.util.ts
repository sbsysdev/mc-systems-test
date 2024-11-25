// react
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// props
import { GlobalDispatch, GlobalState } from './store.type';

export const useGlobalDispatch: () => GlobalDispatch = useDispatch;
export const useGlobalSelector: TypedUseSelectorHook<GlobalState> = useSelector;
