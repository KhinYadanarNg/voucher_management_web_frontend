import { StoreDetailProps } from "./store";
import { SessionUserProps } from "./user";

export interface CampaignProps {
    "campaignId": number;
    "description": string;
    "numberOfVouchers": number;
    "condition1": string;
    "condition2": string;
    "startDate": string;
    "endDate": string;
    "store": StoreDetailProps;
    "campaignStatus": string;
    "numberOfClaimedVouchers": number;
    "pin": string;
}

export interface CreateCampaignParamsProps {
    stores: StoreDetailProps[];
    currentSessionUser: SessionUserProps;

}

export interface CampaignListParamsProps {
    campaigns: CampaignProps[];
    currentSessionUser: SessionUserProps;

}