'use client';
import React from 'react'
import { useRouter } from 'next/navigation';
import { CampaignDetailPropsByFeed } from '@/type/campaign';
import { redeemCampaignsClaimVouchers } from '@/app/service/vouchers';
import toast from 'react-hot-toast';

const CampaignDetailByFeed = ({ campaignDetail, feedStatus, userEmail }: CampaignDetailPropsByFeed) => {
    const router = useRouter();
    console.log(feedStatus)

    const onCancel = () => {
        router.back()
    }

    const redeemCampaigns = async () => {
        const campaign = { campaignId: campaignDetail.campaignId };
        const claimedBy = { email: userEmail };

        try {
            const response = await redeemCampaignsClaimVouchers(campaign, claimedBy);

            if (response.success) {
                toast.success("Your claim voucher is succesfully redeem.")
                router.push(`/components/customer/vouchers`);
            } else {
                toast.error("So sorry, your redeem is not success!")
            }

        } catch {
            toast.error("Failed to Redeem Vouchers");
        }
    };
    return (
        <div data-testid="campaign-detail-id">
            <div className='mt-10'>
                <div className='storedetail__column px-5'>
                    <span>
                        Campaign Title:
                    </span>
                    <span className='bottom_spacing'>
                        {campaignDetail.description}
                    </span>
                    <span>
                        Used vouchers:
                    </span>
                    <span className='bottom_spacing'>
                        {campaignDetail.numberOfClaimedVouchers} out of {campaignDetail.numberOfVouchers}
                    </span>
                    <span>
                        Store Name:
                    </span>
                    <span className='bottom_spacing'>
                        {campaignDetail.store.storeName}
                    </span>
                    <span>
                        T & C:
                    </span>
                    <span className='bottom_spacing'>
                        {campaignDetail.tandc}
                    </span>
                    <span></span>
                    <span className='detail_button'>
                        {feedStatus === "false" && <button onClick={redeemCampaigns} className='storedetail__button hover:bg-orange-100 text-orange-600 '>Redeem</button>}
                        <button className='storedetail__button justify-end' onClick={onCancel}>Cancel</button>
                    </span>
                </div>
            </div>
        </div>

    )
}

export default CampaignDetailByFeed