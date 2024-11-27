// react
import { Link, useLocation } from 'react-router';
// layouts
import { CardLayout } from '@/shared/layouts';

const NotFoundView = () => {
    const location = useLocation();

    return (
        <main className="flex-grow flex flex-col justify-center items-center p-4">
            <CardLayout className="items-center text-center gap-4 w-full max-w-80">
                <h1 className="text-4xl font-medium font-number">404</h1>

                <span className="font-medium">
                    <span>Page </span>

                    <span className="font-number font-light px-2 py-0.5 rounded-sm bg-base-300 theme-dark:bg-base-900">
                        {location.pathname}
                    </span>

                    <span> not found!</span>
                </span>

                <Link to="/" replace className="underline text-secondary-700 theme-dark:text-secondary-300">
                    Return to home
                </Link>
            </CardLayout>
        </main>
    );
};

export default NotFoundView;
