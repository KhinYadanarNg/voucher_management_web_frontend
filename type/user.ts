export interface UserRegistrationResponseProps {
    "message": string;
    "result": [UserInfoProps];
}

export interface UserInfoProps {
    "email": string;
    "role": string;
}

