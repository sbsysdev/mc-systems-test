// layouts
import { FieldLayout } from '@/shared/layouts';
// components
import { Button, Icon } from '@/shared/components';
// hooks
import { useCompanyFilter } from '../../hooks';
// assets
import { mdiLoading, mdiMagnify, mdiMapMarker } from '@mdi/js';

const CompanyFilterForm = () => {
    const {
        form: {
            register,
            formState: { errors },
        },
        handleSearch,
    } = useCompanyFilter();

    return (
        <form className="flex flex-col gap-4 lg:flex-row" onSubmit={handleSearch}>
            <FieldLayout
                className="flex-grow"
                label={({ className }) => <span className={className}>Search by country name</span>}
                hint={({ className, error }) => <span className={className}>{error || 'try Spain'}</span>}
                previous={<Icon path={mdiMapMarker} />}
                after={<Icon path={mdiMagnify} />}
                error={errors.country?.message}
            >
                <input type="text" id="country" placeholder="Type here..." {...register('country')} />
            </FieldLayout>

            <Button
                className="flex flex-row gap-2 items-center self-center"
                type="submit"
                color="primary"
                variant="filled"
            >
                <Icon className="animate-spin" path={mdiLoading} />

                <span>Searching...</span>
            </Button>
        </form>
    );
};

export default CompanyFilterForm;
