// props
import { AppLayoutProps } from './app.props';
// layouts
import { ScrollLayout } from '@/shared/layouts';
// components
import { Appbar } from '@/app/components';
// utils
import { content } from '@/shared/utils';

const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <div className="flex flex-row overflow-hidden">
            {/* <div>SIDEBAR</div> */}

            <ScrollLayout className="flex-grow gap-2" previos={<Appbar />}>
                {content(children)}
            </ScrollLayout>
        </div>
    );
};

export default AppLayout;
