'use client';
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { feedCloumns, renderFeedCell } from "./feedcolumns";
import { FeedTableCard } from "@/type/feed";
import NullData from "../../common/NullData";
import PaginationLink from "../../common/PaginationLink";

const FeedListTable = ({ feeds, pageNumber, totalRecord, size }: FeedTableCard) => {
    return (
        <div>
            {feeds ? (
                <Table
                    aria-label="Example table with dynamic content"
                    data-testid='feed-list-table'
                    bottomContent={
                        <PaginationLink pageNumber={pageNumber} totalRecord={totalRecord} size={size} path={"/components/customer/feeds"}></PaginationLink>
                    }

                >
                    <TableHeader columns={feedCloumns}>
                        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                    </TableHeader>
                    <TableBody items={feeds} emptyContent="No feed to display" data-testid='feed-list-table-body'>
                        {(item) => (
                            <TableRow key={item.feedId}>
                                {(columnKey) => <TableCell>{renderFeedCell(item, columnKey)}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>) : (
                <NullData title="There is no feed list." />
            )}
        </div>
    );
}
export default FeedListTable
