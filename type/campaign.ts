import { StoreDetailProps } from "./store";
import { SessionUserProps } from "./user";

export interface CampaignProps {
    "campaignId": string;
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

export interface MerchantUpdateCampaignProps{
    campaign: CampaignProps;
    stores: StoreDetailProps[];
    currentSessionUser: SessionUserProps;
}

export interface CusCampaignListParamsProps {
    cusCampaigns: CampaignProps[];
    currentSessionUser: SessionUserProps;
    storeName: string;

}