'use client';
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, RadioGroup, Radio, getKeyValue } from "@nextui-org/react";
import { StoreTableCard } from "@/type/store";
import { renderCell, storeColumns } from "./storecolumns";
import PaginationLink from "../../common/PaginationLink";

const Store = ({ stores, pageNumber, totalRecord, size }: StoreTableCard) => {
    return (
        <div>
            <Table
                aria-label="Example table with dynamic content"
                data-testid='store-list-table'
                bottomContent={
                    <PaginationLink pageNumber={pageNumber} totalRecord={totalRecord} size={size} path={"/components/merchant/stores"}></PaginationLink>
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
