// react
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
// types
import { Slot, ThemeColor, ThemeSize, ThemeVariant } from '@/shared/types';

export interface ButtonProps
    extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'children'> {
    children?: Slot;
    variant?: ThemeVariant;
    color?: ThemeColor;
    size?: ThemeSize;
}
