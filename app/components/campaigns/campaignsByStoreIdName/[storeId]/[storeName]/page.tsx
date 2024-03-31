import { getCurrentUser } from '@/app/auth/getCurrentUser';
import NullData from '@/app/components/common/NullData';
import { getCustomerCampaignsByStoreId } from '@/app/service/campaign';
import React from 'react';

interface IParams {
  storeId?: string;
  storeName?: string;
}

const CampaignsListByStoreIdName = async ({ params }: { params: IParams }) => {
    const currentUser = await getCurrentUser();
    const { storeId, storeName } = params;
    const decodedStoreName = storeName ? decodeURIComponent(storeName) : "";
    console.log("decodedStoreName")
    console.log(decodedStoreName)
    let cusCampaignsByStoreIdData;
  
    if(storeId){
      try {
        cusCampaignsByStoreIdData = await getCustomerCampaignsByStoreId(storeId);
      } catch(error) {
        console.log(error)
      }
    }else{
      console.error("Store ID is not defined.");
    }
  
    if (!currentUser || currentUser.role !== "CUSTOMER") {
      return <NullData title="Oops! Access denied" />;
    }
  
    return (
      <div>
      { cusCampaignsByStoreIdData ? ( 
      <CustomerCampaignsListByStore cusCampaigns={cusCampaignsByStoreIdData.data} storeName={decodedStoreName} currentSessionUser={currentUser}/>
      ):(
        <NullData title="Fetch data failed" />
      )
      }
   
      </div>
}

export default CampaignsListByStoreIdName