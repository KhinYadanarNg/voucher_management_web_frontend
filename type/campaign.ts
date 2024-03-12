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
}

export interface CreateCampaignParamsProps {
    stores: StoreDetailProps[];
    currentSessionUser: SessionUserProps;

}