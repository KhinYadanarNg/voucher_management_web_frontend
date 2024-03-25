import { fetchStoreListByMerchant } from '@/app/service/store';
import React from 'react'
import StoreTable from './StoreTable';
import NullData from '../../common/NullData';
import { getCurrentUser } from '@/app/auth/getCurrentUser';

const getStoreList = async () => {
    try {
        const storeList = await fetchStoreListByMerchant('');
        return storeList;
    } catch (error) {
        console.log(error);
    } finally {

    }
}
export default async function Stores() {
    const stores = await getStoreList();
    {
        return (
            stores ? (
                <section className='py-24'>
                    <div className='container'>
                        <StoreTable stores={stores.data}></StoreTable>
                    </div>
                </section>
            ) : (
                <NullData title="Fetch data failed" />
            ))
    }

}