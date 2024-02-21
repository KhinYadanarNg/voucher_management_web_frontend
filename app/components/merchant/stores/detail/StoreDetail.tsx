import React from 'react'
import Image from 'next/image'
import {StoreCard } from '@/type/store'

const StoreDetail: React.FC<StoreCard>  = ({ store }) => {
    return (
        <div data-testid="store-detail-id">
            <div className='mt-10'>
                <div className='storedetail__maincolumn'>
                    <span className='mx-5'><Image src={'/store-placeholder.png'} alt={''} width={220} height={200} /></span>
                    <div className='storedetail__column'>
                        <span>
                            Store Detail ID:
                        </span>
                        <span className='pb-3'>
                            {store.storeID}
                        </span>
                        <span>
                            Store Name:
                        </span>
                        <span className='pb-3'>
                        {store.storeName}
                        </span>
                        <span>
                            Description:
                        </span>
                        <span className='pb-3'>
                        {store.storeDesc}
                        </span>
                        <span>
                            Address1:
                        </span>
                        <span className='pb-3'>
                        {store.storeAddress}
                        </span>
                        <span>
                            Address2:
                        </span>
                        <span className='pb-3'>
                        {store.storeAddress}
                        </span>
                        <span>
                            Country:
                        </span>
                        <span className='pb-3'>
                        {store.storeAddress}
                        </span>
                        <span>
                            Created Date:
                        </span>
                        <span className='pb-3'>
                        {store.storeCreatedDate}
                        </span>
                    </div>
                </div>
            </div>
            <span className='pr-3'>
                <button className='mt-40 ml-60 storedetail__button'>Edit</button>
            </span>
            <span>
                <button className='storedetail__button'>Cancel</button>
            </span>
        </div>
    )
}

export default StoreDetail
