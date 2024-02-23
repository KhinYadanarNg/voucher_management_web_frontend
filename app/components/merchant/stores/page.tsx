import { fetchStoreListByMerchant } from '@/app/service/store';
import React from 'react'
import StoreTable from './StoreTable';

const getStoreList = async () => {
    try {
        const storeList = await fetchStoreListByMerchant();
        return storeList;
    } catch (error) {
        console.log(error);
    } finally {

    }
}
export default async function Stores() {
    const stores = await getStoreList();
    const {message, result} = stores;
    return (
        <section className='py-24'>
            <div className='container'>
                <StoreTable stores={result}></StoreTable>
            </div>
        </section>
    )
}