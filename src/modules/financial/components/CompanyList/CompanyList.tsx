// hooks
import { useCompanyFilter } from '../../hooks';
// components
import { Icon } from '@/shared/components';
import { CompanyTable } from '../CompanyTable';
// assets
import { mdiLoading } from '@mdi/js';

const CompanyList = () => {
    const {
        query: { data, isPending, isFetching, isError, error },
    } = useCompanyFilter();

    if (isPending) {
        return <></>;
    }

    if (isFetching) {
        return (
            <span className="flex flex-col flex-grow items-center justify-center text-8xl">
                <Icon className="animate-spin" path={mdiLoading} />
            </span>
        );
    }

    if (isError) {
        return (
            <span className="font-number text-center text-secondary-700 theme-dark:text-secondary-300">
                <span className="font-medium">ERROR: </span>

                <span>{error.message}</span>
            </span>
        );
    }

    return <CompanyTable data={data} />;
};

export default CompanyList;
