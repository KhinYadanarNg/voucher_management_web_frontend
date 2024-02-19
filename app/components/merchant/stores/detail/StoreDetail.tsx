import React from 'react'
import Image from 'next/image'
import { button } from '@nextui-org/react'

const StoreDetail = () => {
    return (
        <div>
            <div className='mt-10 grid md:grid-cols-2'>
                <div className='storedetail__maincolumn'>
                    <span className='mx-5'><Image src={'/store-placeholder.png'} alt={''} width={220} height={200} /></span>
                    <div className='storedetail__column'>
                        <span>
                            Store Detail ID:
                        </span>
                        <span className='pb-3'>
                            S1
                        </span>
                        <span>
                            Store Name:
                        </span>
                        <span className='pb-3'>
                            NTUC
                        </span>
                        <span>
                            Description:
                        </span>
                        <span className='pb-3'>
                            Chinese new year promotion
                        </span>
                        <span>
                            Address1:
                        </span>
                        <span className='pb-3'>
                            Orchard road
                        </span>
                        <span>
                            Address2:
                        </span>
                        <span className='pb-3'>
                            Orchard road
                        </span>
                        <span>
                            Country:
                        </span>
                        <span className='pb-3'>
                            Singapore
                        </span>
                        <span>
                            Created Date:
                        </span>
                        <span className='pb-3'>
                            19 Feb 2024
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
