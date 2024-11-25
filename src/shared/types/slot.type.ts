// react
import { ReactNode } from 'react';

type SlotNodes = ReactNode | ReactNode[];

export type Slot<T = undefined> = SlotNodes | ((params: T) => SlotNodes);
