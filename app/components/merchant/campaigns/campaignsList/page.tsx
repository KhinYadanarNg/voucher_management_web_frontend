import React from 'react'
import { fetchCampaignsByMerchant } from '@/app/service/campaign';
import { getCurrentUser } from '@/app/auth/getCurrentUser';
import NullData from '../../../common/NullData';
import CampaignList from '../../../campaigns/campaignAsset/CampaignList';
import { Spinner } from '@nextui-org/react';
import { pageSize } from '@/utils';

const getCampaignListByMerchant = async (email:string, pageNumber: number, size: number) => {
  try {
    const campaigns = await fetchCampaignsByMerchant(email, pageNumber - 1, size);
    return campaigns;
  } catch (error) {
    console.log(error);
  } finally {

  }
}

export default async function CampaignListByMerchant({ searchParams }: {
  searchParams: {
    page: string;
    isHome?: string;
  }
}) {
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role !== "MERCHANT") {
    return <NullData title="Oops! Access denied" />;
  }

  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1
  const size = pageSize;
  const isHome =
    typeof searchParams.isHome === 'string' ? Boolean(searchParams.isHome) : false
  const path = isHome ? '/' : '/components/merchant/campaigns/campaignsList';
  const campaigns = await getCampaignListByMerchant(currentUser.email, page, size);
  return (
    <div>
      {campaigns ?
        (<CampaignList campaigns={campaigns.data} currentSessionUser={currentUser} pageNumber={page} totalRecord={campaigns.totalRecord} size={size} redirectPath={path} />
        ) : (
          <div className="flex flex-col justify-center items-center h-screen">
            <Spinner color="warning" size="lg" />
            <span>Campaigns list is loading</span>
          </div>
        )}
    </div>
  )
}

