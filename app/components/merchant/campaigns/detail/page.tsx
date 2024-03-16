import NullData from "@/app/components/common/NullData";
import { getCurrentUser } from "@/app/auth/getCurrentUser";
import { CampaignProps } from "@/type/campaign";
import CampaignDetail from "./CampaignDetail";

const DetailCampaign = async ({ searchParams }: {
    searchParams: {
        campaign: CampaignProps;
    }
}) => {
    const currentUser = await getCurrentUser();
    const decodedCampaignData = searchParams.campaign ? JSON.parse(searchParams.campaign.toString()) : null;

    {
        return (
            currentUser ? (<div>{decodedCampaignData && <CampaignDetail campaign={decodedCampaignData} />}</div>) : (
                <NullData title="Oops Access denied" />
            )
        );
    }
};

export default DetailCampaign;