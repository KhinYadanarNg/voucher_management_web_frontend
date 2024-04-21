import React from "react";
import { fetchCampaignsByCustomer } from "@/app/service/campaign";
import { getCurrentUser } from "@/app/auth/getCurrentUser";
import NullData from "../../common/NullData";
import CampaignList from "../../campaigns/campaignAsset/CampaignList";
import { Spinner } from "@nextui-org/react";
import { pageSize } from "@/utils";
import Loading from "../../common/Loading";

const getCampaignListByCustomer = async (pageNumber: number, size: number) => {
  try {
    const campaigns = await fetchCampaignsByCustomer(pageNumber - 1, size);
    return campaigns;
  } catch (error) {
    console.log(error);
  } finally {
  }
};

export default async function CampaignListByCustomer({ searchParams }: {
  searchParams: {
    page: string;
    isHome?: string;
  }
}) {
  var currentUser = await getCurrentUser();

  if (!currentUser) {
    currentUser = { email: "", name: "", image: "", role: "" };
  } else if (currentUser.role === "MERCHANT") {
    return <NullData title="Oops! Access denied" />;
  }

  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1
  const isHome =
    typeof searchParams.isHome === 'string' ? Boolean(searchParams.isHome) : false
  const size = pageSize;
  const campaigns = await getCampaignListByCustomer(page, size);
  const path = !isHome ? '/components/customer/campaigns' : '/'
  {
    return (
      <div>
        {campaigns ? (
          <CampaignList
            campaigns={campaigns.data}
            currentSessionUser={currentUser}
            pageNumber={page}
            totalRecord={campaigns.totalRecord}
            size={pageSize}
            redirectPath={path}
          />
        ) : (
           <Loading></Loading>
        )}
      </div>
    );
  }
}
