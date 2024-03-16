import React from 'react'
import { fetchCampaignsByCustomer} from '@/app/service/campaign';
import { getCurrentUser } from '@/app/auth/getCurrentUser';
import NullData from '../../common/NullData';
import CampaignList from '../../campaignAsset/CampaignList';

const getCampaignListByCustomer = async () => {
  try {
    const campaigns = await fetchCampaignsByCustomer();
    return campaigns;
  } catch (error) {
    console.log(error);
  } finally {

  }
}

export default async function CampaignListByCustomer() {
  var currentUser = await getCurrentUser();
  const campaigns = await getCampaignListByCustomer();

  if (!currentUser) {
    currentUser = { email: "", name: "", image: "", role: "" }
  } else if (currentUser.role === "MERCHANT") {
    return <NullData title="Oops! Access denied" />;
  }
  {
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
}

