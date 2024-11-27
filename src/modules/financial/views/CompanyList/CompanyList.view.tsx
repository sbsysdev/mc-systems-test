// layouts
import { CardLayout } from '@/shared/layouts';
// components
import { CompanyFilterForm, CompanyList } from '../../components';

const CompanyListView = () => {
    return (
        <main className="p-4 flex flex-col flex-grow gap-4">
            <CardLayout>
                <CompanyFilterForm />
            </CardLayout>

            <CardLayout>
                <CompanyList />
            </CardLayout>
        </main>
    );
};

export default CompanyListView;
