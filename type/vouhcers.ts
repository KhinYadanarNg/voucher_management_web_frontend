import { SessionUserProps } from "./user";
import { StoreDetailProps } from "./store";
import { CampaignProps } from "./campaign";

export interface VoucherProps {
    "voucherId": string;
    "campaign": CampaignProps;
    "voucherStatus": string;
    "amount": GLfloat;
    "claimTime": string;
    "consumedTime": string;
}

export interface VoucherListParamsProps {
    vouchers: VoucherProps[];
    currentSessionUser: SessionUserProps;

}