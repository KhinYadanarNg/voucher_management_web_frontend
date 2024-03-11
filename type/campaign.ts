import { StoreDetailProps } from "./store";

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