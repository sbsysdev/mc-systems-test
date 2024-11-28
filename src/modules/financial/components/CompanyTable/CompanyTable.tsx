// react
import { useState } from 'react';
// props
import { CompanyTableProps } from './companyTable.props';
// layouts
import { FieldLayout } from '@/shared/layouts';
// components
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button, Icon } from '@/shared/components';
// types
import { FinalcialSuccessResponse } from '../../types';
// utils
import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from '@tanstack/react-table';
// assets
import {
    mdiArrowDownBold,
    mdiArrowLeftCircle,
    mdiArrowRightCircle,
    mdiArrowUpBold,
    mdiFilter,
    mdiSwapVerticalBold,
} from '@mdi/js';

const columns: ColumnDef<FinalcialSuccessResponse>[] = [
    {
        accessorKey: 'NombreComercial',
        header: ({ column }) => {
            return (
                <Button
                    className="flex flex-row items-center gap-2"
                    variant="text"
                    size="sm"
                    color={column.getIsSorted() ? 'secondary' : 'base'}
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                >
                    <span>Company name</span>

                    <Icon
                        path={
                            column.getIsSorted() === 'asc'
                                ? mdiArrowUpBold
                                : column.getIsSorted() === 'desc'
                                  ? mdiArrowDownBold
                                  : mdiSwapVerticalBold
                        }
                    />
                </Button>
            );
        },
    },
    {
        accessorKey: 'NombreLegal',
        header: 'Legal name',
    },
    {
        accessorKey: 'Pais',
        header: 'Origin',
    },
    {
        accessorKey: 'FechaCreacion',
        header: 'Start at',
        cell: ({ row }) => {
            const asDate = new Date(row.getValue('FechaCreacion'));

            return <div>{asDate.toDateString()}</div>;
        },
    },
    {
        accessorKey: 'PrincipalProducto',
        header: ({ column }) => {
            return (
                <Button
                    className="flex flex-row items-center gap-2"
                    variant="text"
                    size="sm"
                    color={column.getIsSorted() ? 'secondary' : 'base'}
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                >
                    <span>Main product</span>

                    <Icon
                        path={
                            column.getIsSorted() === 'asc'
                                ? mdiArrowUpBold
                                : column.getIsSorted() === 'desc'
                                  ? mdiArrowDownBold
                                  : mdiSwapVerticalBold
                        }
                    />
                </Button>
            );
        },
    },
    {
        accessorKey: 'CantidadEmpleados',
        header: () => <div className="text-right">Employees</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue('CantidadEmpleados'));
            const formatted = new Intl.NumberFormat('en-US', {
                style: 'decimal',
            }).format(amount);

            return <div className="text-right font-number">{formatted}</div>;
        },
    },
    {
        accessorKey: 'IngresoAnual',
        header: () => <div className="text-right">Annual income</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue('IngresoAnual'));
            const formatted = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(amount);

            return <div className="text-right font-number">{formatted}</div>;
        },
    },
];

const CompanyTable = ({ data }: CompanyTableProps) => {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters,
        },
    });

    return (
        <div className="flex flex-col gap-4 flex-grow">
            <FieldLayout
                className="max-w-96"
                color="primary"
                hint={({ className }) => <span className={className}>filter by company name</span>}
                after={<Icon path={mdiFilter} />}
            >
                <input
                    type="text"
                    placeholder="Type to filter..."
                    autoComplete="off"
                    value={(table.getColumn('NombreComercial')?.getFilterValue() as string) ?? ''}
                    onChange={event => table.getColumn('NombreComercial')?.setFilterValue(event.target.value)}
                />
            </FieldLayout>

            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map(headerGroup => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <TableHead key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(header.column.columnDef.header, header.getContext())}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>

                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map(row => (
                            <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                                {row.getVisibleCells().map(cell => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            <div className="flex flex-row gap-4 items-center self-end mt-auto">
                <Button
                    variant="text"
                    color="primary"
                    size="xl"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    title="Previous page"
                >
                    <Icon path={mdiArrowLeftCircle} />
                </Button>

                <span className="font-number font-medium text-sm">
                    <span>Page </span>

                    <span>{table.getState().pagination.pageIndex + 1}</span>

                    <span> of </span>

                    <span>{table.getPageCount()}</span>
                </span>

                <Button
                    variant="text"
                    color="primary"
                    size="xl"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    title="Next page"
                >
                    <Icon path={mdiArrowRightCircle} />
                </Button>
            </div>
        </div>
    );
};

export default CompanyTable;
