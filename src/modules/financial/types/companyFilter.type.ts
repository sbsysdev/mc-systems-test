// react
import { UseFormReturn } from 'react-hook-form';
import { UseQueryResult } from '@tanstack/react-query';

export interface FinalcialErrorResponse {
    statusCode: number;
    message: string;
    errors: {
        received: string;
        code: string;
        options: string[];
        path: string[];
        message: string;
    }[];
}

export interface FinalcialSuccessResponse {
    NombreComercial: string;
    NombreLegal: string;
    CEO: string;
    FechaCreacion: string;
    IngresoAnual: number;
    CantidadEmpleados: number;
    Pais: string;
    PrincipalProducto: string;
}

export interface CompanyFilterFormData {
    country: string;
}

export interface CompanyFilterContextProps {
    form: UseFormReturn<CompanyFilterFormData>;
    query: UseQueryResult<FinalcialSuccessResponse[]>;
    handleSearch: () => void;
}
