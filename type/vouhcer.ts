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
    "storeName": string;
    "validDate": string;
}

export interface VoucherListParamsProps {
    vouchers: VoucherProps[];
    currentSessionUser: SessionUserProps;

}