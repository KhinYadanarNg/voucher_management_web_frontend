import React from 'react'
import { fetchCampaignsByMerchant } from '@/app/service/campaign';
import { getCurrentUser } from '@/app/auth/getCurrentUser';
import NullData from '../../common/NullData';
import CampaignList from '../../campaignAsset/CampaignList';

const getCampaignListByMerchant = async () => {
  try {
    const campaigns = await fetchCampaignsByMerchant();
    return campaigns;
  } catch (error) {
    console.log(error);
  } finally {

  }
}

export default async function CampaignListByMerchant() {
  const currentUser = await getCurrentUser();
  const campaigns = await getCampaignListByMerchant();
  if (!currentUser || currentUser.role !== "MERCHANT") {
    return <NullData title="Oops! Access denied" />;
  }
  return (
    <div>
      {campaigns ?
        (<CampaignList campaigns={campaigns.data} currentSessionUser={currentUser} />
        ) : (
          <NullData title="Fetch data failed" />
        )}
    </div>
  )
}

