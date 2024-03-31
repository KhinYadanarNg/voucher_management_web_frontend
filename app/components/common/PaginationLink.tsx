import Link from 'next/link'
import React from 'react'

export type PaginationProps = {
    pageNumber: number;
    totalRecord: number;
    size: number;
    path: string
}

const PaginationLink = ({ pageNumber, totalRecord, size, path }: PaginationProps) => {
    return (
        <div className="flex w-full justify-center mt-5">
            {pageNumber !== 1 && <Link
                href={{
                    pathname: path,
                    query: {
                        page: pageNumber - 1
                    }

                }}
                className='rounded border bg-gray-100 px-3 py-1  text-sm text-gray-800'
            >
                Previous
            </Link>}
            <span>&nbsp; </span>
            {totalRecord > pageNumber * size &&
                <Link
                    href={{
                        pathname: path,
                        query: {
                            page: pageNumber + 1
                        }

                    }}
                    className='rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800'
                >
                    Next
                </Link>}
        </div>
    )
}

export default PaginationLink