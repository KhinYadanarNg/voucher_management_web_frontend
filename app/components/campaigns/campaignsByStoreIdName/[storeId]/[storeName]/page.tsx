import React from "react";
import { getCustomerCampaignsByStoreId, getMerchantCampaignsByStoreId } from "@/app/service/campaign";
import { getCurrentUser } from "@/app/auth/getCurrentUser";
import NullData from "@/app/components/common/NullData";
import CampaignsListByStore from "./CampaignsListByStore";
import toast from "react-hot-toast";
import Loading from "@/app/components/common/Loading";

interface IParams {
  storeId?: string;
  storeName?: string
}

const CampaignsByStore = async ({ params }: { params: IParams }) => {
  const currentUser = await getCurrentUser();
  const { storeId, storeName } = params;
  const decodedStoreName = storeName ? decodeURIComponent(storeName) : "";
  let campaignsByStoreIdData;

  if (!currentUser) {
    return <NullData title="Oops! Access denied" />;
  }

  if (storeId) {

    if (currentUser?.role === 'MERCHANT') {
      try {
        campaignsByStoreIdData = await getMerchantCampaignsByStoreId(storeId);
      } catch (error) {
        console.log(error);
        toast.error(campaignsByStoreIdData.message);
      }
    } else if (currentUser?.role === 'CUSTOMER') {
      try {
        campaignsByStoreIdData = await getCustomerCampaignsByStoreId(storeId);
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Role is being undefined");
    }
  } else {
    console.error("Store ID is not defined.");
  }


  return (
    <div>
      {campaignsByStoreIdData ? (
        <CampaignsListByStore campaignsByStore={campaignsByStoreIdData.data} storeName={decodedStoreName} currentSessionUser={currentUser} />
      ) : (
        // <NullData title="Fetch data failed" />
        <Loading/>
      )
      }

    </div>
  );
};

export default CampaignsByStore;
