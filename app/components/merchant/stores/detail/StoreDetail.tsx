import React from 'react'
import Image from 'next/image'
import { StoreCard } from '@/type/store'

const StoreDetail: React.FC<StoreCard> = ({ store }) => {
    console.log(store.image)
    return (
        <div data-testid="store-detail-id">
            <div className='mt-10'>
                <div className='storedetail__maincolumn'>
                    {store.image.length > 0 ? (
                        <span className='mx-5'><Image src={store.image} alt={''} width={220} height={200} /></span>
                    ) : (
                        <span className='mx-5'><Image src='/store-placeholder.png' alt={''} width={220} height={200} /></span>
                    )}
                    <div className='storedetail__column'>
                        <span>
                            Store Detail ID:
                        </span>
                        <span className='pb-3'>
                            {store.storeId}
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
                            {store.description}
                        </span>
                        <span>
                            Address1:
                        </span>
                        <span className='pb-3'>
                            {store.address}
                        </span>
                        <span>
                            Address2:
                        </span>
                        <span className='pb-3'>
                            {store.address2}
                        </span>
                        <span>
                            Country:
                        </span>
                        <span className='pb-3'>
                            {store.country}
                        </span>
                        <span>
                            Contact Number:
                        </span>
                        <span className='pb-3'>
                            {store.contactNumber}
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
