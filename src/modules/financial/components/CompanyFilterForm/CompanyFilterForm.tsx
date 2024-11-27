// layouts
import { FieldLayout } from '@/shared/layouts';
// components
import { Button, Icon } from '@/shared/components';
// assets
import { mdiLoading, mdiMagnify, mdiMapMarker } from '@mdi/js';

const CompanyFilterForm = () => {
    return (
        <form className="flex flex-col gap-4 lg:flex-row">
            <FieldLayout
                className="flex-grow"
                label={({ className }) => <span className={className}>Search by country name</span>}
                hint={({ className }) => <span className={className}>try Spain</span>}
                previous={<Icon path={mdiMapMarker} />}
                after={<Icon path={mdiMagnify} />}
            >
                <input type="text" name="country" id="country" placeholder="Type here..." />
            </FieldLayout>

            <Button
                className="flex flex-row gap-2 items-center self-center"
                type="submit"
                color="primary"
                variant="filled"
                disabled
            >
                <Icon className="animate-spin" path={mdiLoading} />

                <span>Searching...</span>
            </Button>
        </form>
    );
};

export default CompanyFilterForm;
