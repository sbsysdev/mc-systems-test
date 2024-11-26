// types
import { ButtonProps } from './button.props';
// types
import { ThemeColor, ThemeSize } from '@/shared/types';
// utils
import { classNames, content } from '@/shared/utils';

const Button = ({
    className,
    children,
    variant = 'text',
    color = 'base',
    size = 'md',
    type = 'button',
    ...rest
}: ButtonProps) => {
    const textColor: Record<ThemeColor, string> = {
        primary: 'text-primary-700 theme-dark:text-primary-200',
        secondary: 'text-secondary-700 theme-dark:text-secondary-200',
        base: 'text-base-700 theme-dark:text-base-200',
    };

    const bgColor: Record<ThemeColor, string> = {
        primary: 'bg-primary-600 border-primary-600 theme-dark:bg-primary-500 theme-dark:border-primary-500',
        secondary: 'bg-secondary-600 border-secondary-600 theme-dark:bg-secondary-500 theme-dark:border-secondary-500',
        base: 'bg-base-600 border-base-600 theme-dark:bg-base-500 theme-dark:border-base-500',
    };

    const sizes: Record<ThemeSize, string> = {
        xs: 'text-xs p-0',
        sm: 'text-sm p-0',
        md: 'text-base p-0.5',
        lg: 'text-lg p-1',
        xl: 'text-xl p-2',
    };

    return (
        <button
            className={classNames(
                'border-2 hover:scale-105 active:scale-95',
                variant === 'filled'
                    ? 'text-base-50'
                    : 'bg-opacity-0 theme-dark:bg-opacity-0 hover:bg-opacity-10 theme-dark:hover:bg-opacity-10 active:bg-opacity-20 theme-dark:active:bg-opacity-20',
                variant !== 'filled' && textColor[color],
                variant === 'text' &&
                    'border-opacity-0 theme-dark:border-opacity-0 hover:border-opacity-10 theme-dark:hover:border-opacity-10 active:border-opacity-20 theme-dark:active:border-opacity-20',
                bgColor[color],
                sizes[size],
                className
            )}
            type={type}
            {...rest}
        >
            {content(children)}
        </button>
    );
};

export default Button;
