import { CampaignProps } from "./campaign";

export type FeedProps = {
    feedId: string;
    campaign: CampaignProps;
    read: Boolean;
}