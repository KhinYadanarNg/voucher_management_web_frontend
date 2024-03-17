import React from "react";
import CustomerCampaignsListByStore from "./CustomerCampaignsListByStore";
import { getCustomerCampaignsByStoreId } from "@/app/service/campaign";
import { getCurrentUser } from "@/app/auth/getCurrentUser";
import NullData from "@/app/components/common/NullData";

interface IParams {
  storeId?: string;
  storeName?: string;
}

const CampaignsByStore = async ({ params }: { params: IParams }) => {
 const currentUser = await getCurrentUser();
  const { storeId, storeName } = params;
  const decodedStoreName = storeName ? decodeURIComponent(storeName) : "";
  let cusCampaignsByStoreIdData;

  if(storeId){
    cusCampaignsByStoreIdData = await getCustomerCampaignsByStoreId(storeId);
  }else{
    console.error("Store ID is not defined.");
  }

  if (!currentUser || currentUser.role !== "CUSTOMER") {
    return <NullData title="Oops! Access denied" />;
  }

  return (
    <div>
      <CustomerCampaignsListByStore cusCampaigns={cusCampaignsByStoreIdData.data} storeName={decodedStoreName} currentSessionUser={currentUser}/>
    </div>
  );
};

export default CampaignsByStore;
