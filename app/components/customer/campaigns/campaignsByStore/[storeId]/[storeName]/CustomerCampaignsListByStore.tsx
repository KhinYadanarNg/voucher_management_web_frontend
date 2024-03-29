import CampaignList from '@/app/components/campaignAsset/CampaignList'
import NullData from '@/app/components/common/NullData'
import { CusCampaignListParamsProps } from '@/type/campaign'
import React from 'react'


const CustomerCampaignsListByStore = ({cusCampaigns, storeName, currentSessionUser} : CusCampaignListParamsProps) => {
  return (
    <div>
        <div className='font-semibold mt-5 ml-4'>{storeName}</div>
        { cusCampaigns && cusCampaigns.length > 0 ? ( 
        <CampaignList campaigns={cusCampaigns} currentSessionUser={currentSessionUser}/>
        ):(
          <NullData title="There is no campaign list." />
        )}
           
    </div>
  )
}

export default CustomerCampaignsListByStore