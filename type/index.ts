export interface CampaignProps {
    "id": number;
    "code": string;
    "discount": number;
    "description": string;
    "store": string;
    "policy": string;
    "minimumSpend": number;
}

export interface UserRegistrationResponseProps {
    "message": string;
    "result": [UserInfoProps];
}

export interface UserInfoProps {
    "email": string;
}

