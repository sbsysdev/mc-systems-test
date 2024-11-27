// react
import { createContext, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
// types
import {
    CompanyFilterContextProps,
    CompanyFilterFormData,
    FinalcialErrorResponse,
    FinalcialSuccessResponse,
} from '../types';
// utils
import { zodResolver } from '@hookform/resolvers/zod';
import { companyFilterValidator } from '../validations';

export const CompanyFilterContext = createContext<CompanyFilterContextProps>({} as CompanyFilterContextProps);

export const useCompanyFilter = () => useContext(CompanyFilterContext);

export const useCompanyFilterContext = () => {
    const [country, setCountry] = useState<string>('');

    const form = useForm<CompanyFilterFormData>({
        mode: 'onChange',
        resolver: zodResolver(companyFilterValidator),
    });

    const query = useQuery<FinalcialSuccessResponse[]>({
        enabled: !!country,
        retry: false,
        refetchOnWindowFocus: false,
        queryKey: ['companies', country],
        queryFn: async () => {
            const response = await fetch(`https://core-financiero-backend.onrender.com/test/test?country=${country}`);

            if (!response.ok) {
                const error: FinalcialErrorResponse = await response.json();
                form.setError(
                    'country',
                    {
                        message: error.errors.find(err => err.path.find(path => path === 'country'))?.message,
                        type: 'value',
                    },
                    { shouldFocus: true }
                );

                throw new Error(error.errors[0].message);
            }

            return await response.json();
        },
    });

    const handleSearch = form.handleSubmit(async data => {
        if (data.country === country) return query.refetch();

        setCountry(data.country);
    });

    return {
        form,
        query,
        handleSearch,
    } satisfies CompanyFilterContextProps;
};
