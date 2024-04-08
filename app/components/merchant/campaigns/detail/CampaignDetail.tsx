'use client';
import { promoteCampaignByMerchant } from '@/app/service/campaign'
import { CampaignDetailProps} from '@/type/campaign'
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast'

const CampaignDetail = ({ campaign, currentSessionUser }: CampaignDetailProps) => {

    const router = useRouter();

    const encodedData = encodeURIComponent(JSON.stringify(campaign));
    const onCancel = () => {
        router.back();
    }
    const updateCampaign = () => {
        router.push(`/components/merchant/campaigns/updateCampaign?campaign=${encodedData}`)
    }

    const onPromoteCampaign = async () => {
        try {
            if (campaign.campaignId.length > 0 && currentSessionUser?.email) {
                const updatedBy = { "email": currentSessionUser?.email }
                const response = await promoteCampaignByMerchant(campaign.campaignId, updatedBy);
                const { success, message, data } = response;
                if (success) {
                    toast.success(message);
                    router.push("/components/merchant/campaigns/campaignsList?page=1");
                } else {
                    toast.error(message);
                }

            } else {
                toast.error("Invalid request");
            }
        } catch {
            toast.error("failed to load response")
        }
    }
    return (
        <div data-testid='campaign-detail-id'>
            <div className='mt-10 ml-10'>
                <div className='campaigndetail__maincolumn'>
                    <span>
                        Description:
                    </span>
                    <span className='bottom_spacing'>
                        {campaign.description}
                    </span>
                    <span>
                        Status:
                    </span>
                    <span className='bottom_spacing'>
                        {campaign.campaignStatus}
                    </span>
                    <span>
                        Maximum Vouchers:
                    </span>
                    <span className='bottom_spacing'>
                        {campaign.numberOfVouchers}
                    </span>
                    <span>
                        Claimed Vouchers:
                    </span>
                    <span className='bottom_spacing'>
                        {campaign.numberOfClaimedVouchers}
                    </span>
                    <span>
                        Pin:
                    </span>
                    <span className='bottom_spacing'>
                        {campaign.pin}
                    </span>
                    <span>
                        Campaign Start date:
                    </span>
                    <span className='bottom_spacing'>
                        {campaign.startDate}
                    </span>
                    <span>
                        Campaign End date:
                    </span>
                    <span className='bottom_spacing'>
                        {campaign.endDate}
                    </span>
                    <span>
                        Store Name:
                    </span>
                    <span className='pb-10'>
                        {campaign.store.storeName}
                    </span>
                    <span></span>
                    <span className='detail_button'>


                        {campaign.campaignStatus == "CREATED" && (
                            <button onClick={onPromoteCampaign} className='campaigndetail__button  hover:bg-orange-100 text-orange-600 '>Promote</button>
                        )}
                        <button className='campaigndetail__button' onClick={updateCampaign}>Update</button>
                        <button className='campaigndetail__button  justify-end' onClick={onCancel}>Cancel</button>
                    </span>
                </div>
            </div>
        </div>

    )
}

export default CampaignDetail