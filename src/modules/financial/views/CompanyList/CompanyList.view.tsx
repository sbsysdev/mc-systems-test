// layouts
import { CardLayout } from '@/shared/layouts';
// components
import { CompanyFilterForm, CompanyList } from '../../components';
// hooks
import { CompanyFilterContext, useCompanyFilterContext } from '../../hooks';

const CompanyListView = () => {
    const context = useCompanyFilterContext();

    return (
        <CompanyFilterContext.Provider value={context}>
            <main className="p-4 flex flex-col flex-grow gap-4">
                <CardLayout>
                    <CompanyFilterForm />
                </CardLayout>

                <CardLayout className="flex-grow">
                    <CompanyList />
                </CardLayout>
            </main>
        </CompanyFilterContext.Provider>
    );
};

export default CompanyListView;
