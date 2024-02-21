import React from 'react'
import ProgressBar from '../common/Progressbar';
import { CampaignProps } from '@/type/campaign';

export interface CampaignCardProps {
    campaign: CampaignProps;
}


const Campaign = ({ campaign }: CampaignCardProps) => {
    const { id, code, discount, description, store, policy, minimumSpend } = campaign;
    return (
        <div className='border px-2 py-2'>
            <h3 className='pb-2'>{campaign.description}</h3>
            <ProgressBar></ProgressBar>
            <div className='border mt-3 px-2 grid grid-cols-2'>
                <div className='border h-32 flex justify-center items-center bg-orange-500'>{store}</div>
                <div>
                    <p className='px-2'>${discount} off</p>
                    <p className='px-2'>Min Spend: ${minimumSpend}</p>
                </div>
            </div>
            <h3 className='mt-6'>{policy}</h3>
            <button className='bg-orange-500 w-20 h-8 my-3 float-right'>Claim</button>
        </div>
    )
}

export default Campaign