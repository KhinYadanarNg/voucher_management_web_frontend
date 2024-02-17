import { CampaignProps } from '@/type'
import React from 'react'
import ProgressBar from '../common/Progressbar';

export interface CampaignCardProps {
    campaign: CampaignProps;
  }


const Campaign = ({ campaign }: CampaignCardProps) => {
    const { id, code, discount, description, store, policy, minimumSpend } = campaign;
    return (
        <div className='border px-2 py-2'>
            <h3 className='pb-2'>{campaign.description}</h3>
            <ProgressBar></ProgressBar>
            <div className='border w-58 h-40 pt-2 px-2 mt-3 grid 2xl:grid-cols-4 md:grid-cols-2 grid-cols-2'>
                <div className='border h-32 flex justify-center items-center bg-orange-500'>{store}</div>
                <text className='px-2 w-full'>${discount} off<br />
                    Min Spend: ${minimumSpend}</text>
            </div>
            <h3 className='mt-6'>{policy}</h3>
            <button className='bg-orange-500 w-20 h-8 my-3 float-right'>Claim</button>
        </div>
    )
}

export default Campaign