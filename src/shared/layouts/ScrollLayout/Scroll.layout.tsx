// props
import { ScrollLayoutProps } from './scroll.props';
// utils
import { classNames, content } from '@/shared/utils';

const ScrollLayout = ({ className, children, previous, after, ...rest }: ScrollLayoutProps) => {
    // TODO: horizontal scroll
    return (
        <div className={classNames('flex flex-col overflow-hidden', className)} {...rest}>
            {content(previous)}

            <div className="overflow-y-auto flex flex-col flex-grow">{content(children)}</div>

            {content(after)}
        </div>
    );
};

export default ScrollLayout;
