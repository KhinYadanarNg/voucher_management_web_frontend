import React from 'react'
import { fetchCampaignsByMerchant } from '@/app/service/campaign';
import { getCurrentUser } from '@/app/auth/getCurrentUser';
import NullData from '../../../common/NullData';
import CampaignList from '../../../campaigns/campaignAsset/CampaignList';
import { Spinner } from '@nextui-org/react';

const getCampaignListByMerchant = async (email:string) => {
  try {
    const campaigns = await fetchCampaignsByMerchant(email);
    return campaigns;
  } catch (error) {
    console.log(error);
  } finally {

  }
}

export default async function CampaignListByMerchant() {
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role !== "MERCHANT") {
    return <NullData title="Oops! Access denied" />;
  }
  const campaigns = await getCampaignListByMerchant(currentUser.email);
  return (
    <div>
      {campaigns ?
        (<CampaignList campaigns={campaigns.data} currentSessionUser={currentUser} />
        ) : (
          <div className="flex flex-col justify-center items-center h-screen">
            <Spinner color="warning" size="lg" />
            <span>Campaigns list is loading</span>
          </div>
        )}
    </div>
  )
}

