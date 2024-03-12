import { CampaignProps } from '@/type/campaign'
import React from 'react'
import { fetchCampaignsByMerchant } from '@/app/service/campaign';
import NullData from '../../common/NullData';
import { getCurrentUser } from '@/app/auth/getCurrentUser';
import Campaign from '../../common/Campaign';

const getCampaignList = async () => {
    try {
        const campaigns = await fetchCampaignsByMerchant();
        return campaigns;
    } catch (error) {
        console.log(error);
    } finally {

    }
}
const CampaignListByCustomer = async () => {
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

export default CampaignListByCustomer