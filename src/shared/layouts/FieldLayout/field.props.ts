// react
import { DetailedHTMLProps, LabelHTMLAttributes } from 'react';
// types
import { Slot, ThemeColor } from '@/shared/types';

export interface FieldLayoutSlotProps {
    className?: string;
    error?: string;
    color: ThemeColor;
    unstyled: boolean;
}

export interface FieldLayoutProps
    extends Omit<DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, 'children'> {
    label?: Slot<FieldLayoutSlotProps>;
    previous?: Slot<FieldLayoutSlotProps>;
    children?: Slot<FieldLayoutSlotProps>;
    after?: Slot<FieldLayoutSlotProps>;
    hint?: Slot<FieldLayoutSlotProps>;
    error?: string;
    color?: ThemeColor;
    unstyled?: boolean;
}
