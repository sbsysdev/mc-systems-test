// props
import { ScrollLayoutProps } from './scroll.props';
// utils
import { classNames, content } from '@/shared/utils';

const ScrollLayout = ({
    className,
    children,
    previos: previosContent,
    after: afterContent,
    ...rest
}: ScrollLayoutProps) => {
    // TODO: horizontal scroll
    return (
        <div className={classNames('flex flex-col overflow-hidden', className)} {...rest}>
            {content(previosContent)}

            <div className="overflow-y-auto flex flex-col flex-grow">{content(children)}</div>

            {content(afterContent)}
        </div>
    );
};

export default ScrollLayout;
