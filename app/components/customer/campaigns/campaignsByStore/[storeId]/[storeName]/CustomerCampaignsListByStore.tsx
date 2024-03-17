import CampaignList from '@/app/components/campaignAsset/CampaignList'
import { CusCampaignListParamsProps } from '@/type/campaign'
import React from 'react'


const CustomerCampaignsListByStore = ({cusCampaigns, storeName, currentSessionUser} : CusCampaignListParamsProps) => {
  return (
    <div>
        <div className='font-semibold mt-5 ml-4'>{storeName}</div>
            <CampaignList campaigns={cusCampaigns} currentSessionUser={currentSessionUser}/>
    </div>
  )
}

export default CustomerCampaignsListByStore