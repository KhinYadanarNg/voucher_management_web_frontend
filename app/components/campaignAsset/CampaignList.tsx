import React from 'react'
import { CampaignListParamsProps, CampaignProps } from '@/type/campaign'
import Campaign from './Campaign'
import NullData from '../common/NullData';

const CampaignList = ({ campaigns, currentSessionUser }: CampaignListParamsProps) => {
    const role = currentSessionUser.role;
    const userEmail = currentSessionUser.email;
    return (
        <div data-testid='campaign-list-by-merchant'>
            { campaigns && campaigns.length > 0 ? (
                <section>
                    <div className='home__campaigns-wrapper'>
                        {campaigns.map((campaign: CampaignProps) => (
                            <Campaign campaign={campaign} userRole={role} userEmail={userEmail} key={campaign.campaignId} />
                        ))}
                    </div>
                </section>) : (
                <NullData title="There is no campaign list" />
            )}
        </div>
    )
}

export default CampaignList