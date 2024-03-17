'use client';
import { promoteCampaignByMerchant } from '@/app/service/campaign'
import { CampaignProps } from '@/type/campaign'
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast'

const CampaignDetail = ({ campaign }: { campaign: CampaignProps }) => {
    const router = useRouter();

    const onPromoteCampaign = async () => {
        try {
            if (campaign.campaignId.length > 0) {
                const response = await promoteCampaignByMerchant(campaign.campaignId);
                const { success, message, data } = response;
                if (success) {
                    toast.success(message);
                    router.push("/components/merchant/campaigns");
                } else {
                    toast.error(message);
                }

            } else {
                toast.error("Campaign id is invalid");
            }
        } catch {
            toast.error("failed to load response")
        }
    }
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
                        Campaign Start date:
                    </span>
                    <span className='pb-3'>
                        {campaign.startDate}
                    </span>
                    <span>
                        Campaign End date:
                    </span>
                    <span className='pb-3'>
                        {campaign.endDate}
                    </span>
                    <span>
                        Store Name:
                    </span>
                    <span className='pb-10'>
                        {campaign.store.storeName}
                    </span>
                    <span></span>
                    <span className='flex justify-start gap-1'>
                        {campaign.campaignStatus == "CREATED" && (
                            <button onClick={onPromoteCampaign} className='campaigndetail__button  hover:bg-orange-100 text-orange-600 '>Promote</button>
                        )}
                        <button className='campaigndetail__button '>Update</button>
                        <button className='campaigndetail__button  justify-end'>Cancel</button>
                    </span>
                </div>
            </div>
        </div>

    )
}

export default CampaignDetail