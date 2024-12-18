// types
import { Slot } from '../types';

export const content = <T = undefined>(component: Slot<T>, params?: T) =>
    typeof component === 'function' ? component(params!) : component;
