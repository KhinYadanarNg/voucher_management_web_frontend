import { getCurrentUser } from "@/app/auth/getCurrentUser";
import { CampaignProps } from "@/type/campaign";
import NullData from "@/app/components/common/NullData";
import UpdateCampaignForm from "./UpdateCampaignForm";
import Container from "@/app/components/Container";
import { fetchStoreListByMerchant } from "@/app/service/store";

const getStoreList = async (email: string) => {
  try {
    const storeList = await fetchStoreListByMerchant(email);
    return storeList;
  } catch (error) {
    console.log(error);
  } finally {

  }
}

const UpdateCampaign = async ({ searchParams }: {
  searchParams: {
    campaign: CampaignProps
  }
}) => {

  const currentUser = await getCurrentUser();
  const decodedCampaignData = searchParams.campaign ? JSON.parse(searchParams.campaign.toString()) : null;

  if (!currentUser || currentUser.role !== "MERCHANT") {
    return <NullData title="Oops! Access denied" />;
  }

  const stores = await getStoreList(currentUser.email);

  return (
    <div>
      {stores ? (
        <Container>
          <UpdateCampaignForm campaign={decodedCampaignData} stores={stores.data} currentSessionUser={currentUser} />
        </Container>) : (
        <NullData title="Please create a store first" />
      )}
    </div>
  )
};

export default UpdateCampaign;
