'use client';
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, RadioGroup, Radio, getKeyValue } from "@nextui-org/react";
import { StoreTableCard } from "@/type/store";
import { renderCell, storeColumns } from "./storecolumns";
import Link from "next/dist/client/link";

const Store = ({ stores, pageNumber, totalRecord }: StoreTableCard) => {
    return (
        <div>
            <Table
                aria-label="Example table with dynamic content"
                data-testid='store-list-table'
                bottomContent={
                    <div className="flex w-full justify-center">
                    {pageNumber !== 1  && <Link
                        href={{
                            pathname: '/components/merchant/stores',
                            query: {
                                page: pageNumber - 1
                            }

                        }}
                        className='rounded border bg-gray-100 px-3 py-1  text-sm text-gray-800'
                    >
                        Previous
                    </Link>}
                    <span>&nbsp; </span>
                    {totalRecord > pageNumber * 5 && 
                    <Link
                        href={{
                            pathname: '/components/merchant/stores',
                            query: {
                                page: pageNumber + 1
                            }

                        }}
                        className='rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800'
                    >
                        Next
                    </Link>}
                </div>
                }
            >
                <TableHeader columns={storeColumns}>
                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody items={stores} emptyContent="No store to display" data-testid='store-list-table-body'>
                    {(item) => (
                        <TableRow key={item.storeId}>
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
export default Store
