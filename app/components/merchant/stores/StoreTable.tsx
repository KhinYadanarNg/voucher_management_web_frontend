'use client';
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, RadioGroup, Radio, getKeyValue } from "@nextui-org/react";
import { StoreDetailProps } from "@/type/store";
import { renderCell, storeColumns } from "./storecolumns";

const Store = ({ stores }: { stores: StoreDetailProps[] }) => {
    return (
        <div>
            <Table
                aria-label="Example table with dynamic content"
                data-testid='store-list-table'
                bottomContent={
                    <div className="flex w-full justify-center">
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
