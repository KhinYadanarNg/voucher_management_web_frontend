import { fetchStoreListByMerchant } from '@/app/service/store';
import React from 'react'
import StoreTable from './StoreTable';
import NullData from '../../common/NullData';

const getStoreList = async (page: number, size: number) => {
    try {
        console.log(page)
        const storeList = await fetchStoreListByMerchant('', page - 1, size);
        return storeList;
    } catch (error) {
        console.log(error);
    } finally {

    }
}
export default async function Stores({ searchParams }: {
    searchParams: {
        page: string;
    }
}) {
    const page =
        typeof searchParams.page === 'string' ? Number(searchParams.page) : 0
    const stores = await getStoreList(page, 5);
    {
        return (
            stores ? (
                <section className='py-24'>
                    <div className='container'>
                    <StoreTable stores={stores.data} pageNumber={page} totalRecord={stores.totalRecord}></StoreTable>
                    </div>
                </section>
            ) : (
                <NullData title="Fetch data failed" />
            ))
    }

}