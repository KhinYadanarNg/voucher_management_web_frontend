'use client'
import React from 'react'
import { CampaignProps } from '@/type/campaign';
import Link from 'next/link';
import VouchersSpentProgressBar from './VouchersSpentProgressBar';

export interface CampaignCardProps {
    campaign: CampaignProps;
    userRole: string;

}
const Campaign = ({ campaign, userRole }: CampaignCardProps) => {
    const encodedData = encodeURIComponent(JSON.stringify(campaign));
    return (
        <div className='border px-2 py-2'>
            <h3 className='pb-2'>{campaign.description}</h3>
            <VouchersSpentProgressBar totalVouchers={campaign.numberOfVouchers} noOfClaimedVouchers={campaign.numberOfClaimedVouchers}></VouchersSpentProgressBar>
            <div className='border mt-3 px-2 grid grid-cols-2'>
                <div className='border h-32 flex justify-center items-center bg-orange-500'>{campaign.store.storeName}</div>
                <div>
                    <p className='px-2 py-3'>{campaign.condition1}</p>
                    <p className='px-2'>{campaign.condition2}</p>
                </div>
            </div>
            {/* <h3 className='mt-6'>{policy}</h3> */}

            {
                userRole !== '' ? (
                    <div>{userRole === "MERCHANT" ? (
                        <div>
                            <Link className='border-2 hover:bg-orange-300 w-20 mt-3 float-right rounded-3xl text-center' href={`/components/merchant/campaigns/detail?campaign=${encodedData}`}>
                                View
                            </Link>
                        </div>
                    ) : (
                        <button className='border-2 hover:bg-orange-300 w-20 h-8 my-3 float-right rounded-3xl'>Reedem
                        </button>
                    )}</div>) : (<div><button className='border-2 hover:bg-orange-300 w-24 h-10 my-3 float-right rounded-3xl'>Reedem
                    </button></div>
                )}
        </div>

    )
}
export default Campaign