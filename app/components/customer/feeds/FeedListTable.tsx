'use client';
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { feedCloumns, renderFeedCell } from "./feedcolumns";
import { FeedProps } from "@/type/feed";
import NullData from "../../common/NullData";

const FeedListTable = ({ feeds }: { feeds: FeedProps[] }) => {
    return (
        <div>
            {feeds ? (
                <Table
                    aria-label="Example table with dynamic content"
                    data-testid='feed-list-table'

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
