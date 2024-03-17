import CampaignList from '@/app/components/campaignAsset/CampaignList';
import { CusCampaignListParamsProps } from '@/type/campaign';
import React from 'react'


const CustomerCampaignsByStoreId = ({ cusCampaigns, currentSessionUser, storeName }: CusCampaignListParamsProps) => {
  return (
    <div>
      <h2>{storeName}</h2>s
      <CampaignList campaigns={cusCampaigns} currentSessionUser={currentSessionUser}/>
    </div>
  )
}

export default CustomerCampaignsByStoreId