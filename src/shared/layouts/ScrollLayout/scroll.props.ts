// react
import { DetailedHTMLProps, HTMLAttributes } from 'react';
// types
import { Slot } from '@/shared/types';

export interface ScrollLayoutProps
    extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'children'> {
    previous?: Slot;
    children?: Slot;
    after?: Slot;
}
