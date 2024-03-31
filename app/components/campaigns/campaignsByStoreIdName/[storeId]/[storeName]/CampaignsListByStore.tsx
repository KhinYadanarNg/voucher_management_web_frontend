import CampaignList from '@/app/components/campaignAsset/CampaignList'
import NullData from '@/app/components/common/NullData'
import { CampaignListByStoreParamsProps } from '@/type/campaign'
import React from 'react'


const CampaignsListByStore = ({campaignsByStore, storeName, currentSessionUser} : CampaignListByStoreParamsProps) => {
  return (
    <div>
        <div className='font-semibold mt-5 ml-4'>{storeName}</div>
        { campaignsByStore && campaignsByStore.length > 0 ? ( 
        <CampaignList campaigns={campaignsByStore} currentSessionUser={currentSessionUser}/>
        ):(
          <NullData title="There is no campaign list." />
        )}
           
    </div>
  )
}

export default CampaignsListByStore