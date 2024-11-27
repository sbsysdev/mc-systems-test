// layouts
import { FieldLayout } from '@/shared/layouts';
// components
import { Button, Icon } from '@/shared/components';
// hooks
import { useCompanyFilter } from '../../hooks';
// utils
import { classNames } from '@/shared/utils';
// assets
import { mdiLoading, mdiMagnify, mdiMapMarker } from '@mdi/js';

const CompanyFilterForm = () => {
    const {
        form: {
            register,
            formState: { errors },
        },
        query: { isFetching },
        handleSearch,
    } = useCompanyFilter();

    return (
        <form className="flex flex-col gap-4 lg:flex-row" onSubmit={handleSearch}>
            <FieldLayout
                className="flex-grow"
                label={({ className }) => <span className={className}>Search by country name*</span>}
                hint={({ className, error }) => (
                    <span className={className}>{error || 'try a capitalized country name'}</span>
                )}
                previous={<Icon path={mdiMapMarker} />}
                after={<Icon path={mdiMagnify} />}
                error={errors.country?.message}
            >
                <input
                    type="text"
                    id="country"
                    placeholder="Type here..."
                    {...register('country')}
                    disabled={isFetching}
                />
            </FieldLayout>

            <Button
                className="flex flex-row gap-2 items-center self-center px-2"
                type="submit"
                color="primary"
                variant="filled"
                disabled={isFetching}
            >
                <Icon
                    className={classNames(isFetching && 'animate-spin')}
                    path={isFetching ? mdiLoading : mdiMagnify}
                />

                <span>Search</span>
            </Button>
        </form>
    );
};

export default CompanyFilterForm;
