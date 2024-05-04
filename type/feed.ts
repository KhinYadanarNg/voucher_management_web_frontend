import { CampaignProps } from "./campaign";

export type FeedProps = {
    feedId: string;
    campaign: CampaignProps;
    read: Boolean;
}

export type FeedTableCard = {
    feeds: FeedProps[];
    pageNumber: number;
    totalRecord: number;
    size: number;
}