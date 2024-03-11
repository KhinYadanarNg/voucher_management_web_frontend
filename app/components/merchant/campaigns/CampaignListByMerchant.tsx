import { CampaignProps } from '@/type/campaign'
import React from 'react'
import Campaign from '../../common/Campaign'
import { fetchCampaignsByMerchant } from '@/app/service/campaign';
import NullData from '../../common/NullData';
import { getCurrentUser } from '@/app/auth/getCurrentUser';

const getCampaignList = async () => {
    try {
        const campaigns = await fetchCampaignsByMerchant();
        return campaigns;
    } catch (error) {
        console.log(error);
    } finally {

    }
}
const CampaignListByMerchant = async () => {
    const currentUser = await getCurrentUser();
    const campaigns = await getCampaignList();
    const role = currentUser?.role || '';
    {
        return (
            campaigns ? (
                <section>
                    <div className='home__campaigns-wrapper'>
                        {campaigns.data.map((campaign: CampaignProps) => (
                            <Campaign campaign={campaign} userRole={role} key={campaign.campaignId} />
                        ))}
                    </div>
                </section>
            ) : (<NullData title="Fetch data failed" />)
        )
    }
}

export default CampaignListByMerchant