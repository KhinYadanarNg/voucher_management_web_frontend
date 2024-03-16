import { CampaignProps } from '@/type/campaign'
import React from 'react'

const CampaignDetail = ({ campaign }: { campaign: CampaignProps }) => {
    return (
        <div>
            <div className='mt-10 ml-10'>
                <div className='campaigndetail__maincolumn'>
                    <span>
                        Campaign ID:
                    </span>
                    <span className='pb-3'>
                        {campaign.campaignId}
                    </span>
                    <span>
                        Description:
                    </span>
                    <span className='pb-3'>
                        {campaign.description}
                    </span>
                    <span>
                        Status:
                    </span>
                    <span className='pb-3'>
                        {campaign.campaignStatus}
                    </span>
                    <span>
                        Maximum Vouchers:
                    </span>
                    <span className='pb-3'>
                        {campaign.numberOfVouchers}
                    </span>
                    <span>
                        Claimed Vouchers:
                    </span>
                    <span className='pb-3'>
                        {campaign.numberOfClaimedVouchers}
                    </span>
                    <span>
                        Pin:
                    </span>
                    <span className='pb-3'>
                        {campaign.pin}
                    </span>
                    <span>
                        Store Name:
                    </span>
                    <span className='pb-10'>
                        {campaign.store.storeName}
                    </span>
                    <span></span>
                    <span className='flex justify-start gap-1'>
                        <button className='campaigndetail__button  hover:bg-orange-100 text-orange-600 '>Promote</button>
                        <button className='campaigndetail__button '>Update</button>
                        <button className='campaigndetail__button  justify-end'>Cancel</button>
                    </span>
                </div>
            </div>
        </div>

    )
}

export default CampaignDetail