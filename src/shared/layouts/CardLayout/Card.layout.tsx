// props
import { CardLayoutProps } from './card.props';
// utils
import { classNames, content } from '@/shared/utils';

const CardLayout = ({ className, children, ...rest }: CardLayoutProps) => {
    return (
        <section
            className={classNames(
                'flex flex-col p-4 bg-base-100 theme-dark:bg-base-700 rounded-md shadow-md',
                className
            )}
            {...rest}
        >
            {content(children)}
        </section>
    );
};

export default CardLayout;
