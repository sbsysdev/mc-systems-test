// props
import { FieldLayoutProps, FieldLayoutSlotProps } from './field.props';
// types
import { ThemeColor } from '@/shared/types';
// utils
import { classNames, content } from '@/shared/utils';

const FieldLayout = ({
    className,
    label,
    previous,
    children,
    after,
    hint,
    error,
    color = 'base',
    unstyled = false,
    ...rest
}: FieldLayoutProps) => {
    const colors: Record<ThemeColor, string> = {
        base: 'border-b-base-700 theme-dark:border-b-base-300',
        primary: 'border-b-primary-500 text-primary-500',
        secondary: 'border-b-secondary-500 text-secondary-500',
    };

    const slotProps: FieldLayoutSlotProps = { error, color, unstyled };

    return (
        <label
            className={classNames(
                'group flex flex-col gap-1',
                'text-base-700 text-opacity-80 focus-within:text-opacity-100',
                'theme-dark:text-base-300 theme-dark:text-opacity-80 theme-dark:focus-within:text-opacity-100',
                className
            )}
            {...rest}
        >
            {content(label, { ...slotProps, className: 'font-semibold mx-1' })}

            <span
                className={classNames(
                    'flex flex-row items-center',
                    'transition-all rounded-sm border-b-2',
                    'border-opacity-60 group-focus-within:border-opacity-100 text-opacity-80 focus-within:text-opacity-100',
                    'theme-dark:border-opacity-60 theme-dark:group-focus-within:border-opacity-100 theme-dark:text-opacity-80 theme-dark:group-focus-within:text-opacity-100',
                    error ? colors.secondary : colors[color],
                    unstyled && 'border-b-transparent'
                )}
            >
                {content(previous, slotProps)}

                {content(children, slotProps)}

                {content(after, slotProps)}
            </span>

            {content(hint, { ...slotProps, className: 'text-center text-sm font-medium mx-1' })}
        </label>
    );
};

export default FieldLayout;
