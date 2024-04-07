import React from 'react'
import { CampaignListParamsProps, CampaignProps } from '@/type/campaign'
import Campaign from './Campaign'
import NullData from '../../common/NullData';
import PaginationLink from '../../common/PaginationLink';

const CampaignList = ({ campaigns, currentSessionUser, pageNumber, totalRecord, size, redirectPath }: CampaignListParamsProps) => {
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
                    {pageNumber >= 0 && <PaginationLink pageNumber={pageNumber} totalRecord={totalRecord} size={size} path={redirectPath}></PaginationLink>}
                </section>) : (
                <NullData title="There is no campaign list" />
            )}
        </div>
    )
}

export default CampaignList