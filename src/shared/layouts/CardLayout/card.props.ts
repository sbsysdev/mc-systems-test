// react
import { DetailedHTMLProps, HTMLAttributes } from 'react';
// types
import { Slot } from '@/shared/types';

export interface CardLayoutProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, 'children'> {
    children?: Slot;
}
