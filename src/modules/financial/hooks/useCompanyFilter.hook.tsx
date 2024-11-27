// react
import { createContext, useContext } from 'react';
import { useForm } from 'react-hook-form';
// types
import { CompanyFilterContextProps, CompanyFilterFormData } from '../types';
// utils
import { zodResolver } from '@hookform/resolvers/zod';
import { companyFilterValidator } from '../validations';

export const CompanyFilterContext = createContext<CompanyFilterContextProps>({} as CompanyFilterContextProps);

export const useCompanyFilter = () => useContext(CompanyFilterContext);

export const useCompanyFilterContext = () => {
    const form = useForm<CompanyFilterFormData>({
        mode: 'all',
        resolver: zodResolver(companyFilterValidator),
    });

    const handleSearch = form.handleSubmit(async data => {
        form.setError('country', {
            message: 'error from API response',
        });
        console.log(data);
    });

    return {
        form,
        handleSearch,
    } satisfies CompanyFilterContextProps;
};
