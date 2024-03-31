import NullData from "@/app/components/common/NullData";
import { getCurrentUser } from "@/app/auth/getCurrentUser";
import CampaignDetailByFeed from "./CampaignDetailByFeed";
import { CampaignCardProps } from "../../campaigns/campaignAsset/Campaign";

const CampaignByFeed = async ({ searchParams }: {
    searchParams: {
        campaign: CampaignCardProps
        feedStatus: string
    }
}) => {
    const currentUser = await getCurrentUser();
    const decodedCampaignData = searchParams.campaign ? JSON.parse(searchParams.campaign.toString()) : null;
    const decodedFeedData = searchParams.feedStatus

    {
        return (
            currentUser ? (<div>{decodedCampaignData && decodedFeedData && <CampaignDetailByFeed campaignDetail={decodedCampaignData} feedStatus={decodedFeedData} userEmail={currentUser.email} />}</div>) : (
                <NullData title="Oops Access denied" />)
        )
    }
};

export default CampaignByFeed;
