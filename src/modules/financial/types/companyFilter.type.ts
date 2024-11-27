// react
import { UseFormReturn } from 'react-hook-form';

export interface CompanyFilterFormData {
    country: string;
}

export interface CompanyFilterContextProps {
    form: UseFormReturn<CompanyFilterFormData>;
    handleSearch: () => void;
}
