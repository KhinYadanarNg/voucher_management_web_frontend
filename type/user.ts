export interface UserRegistrationResponseProps {
    "message": string;
    "result": [UserInfoProps];
}

export interface UserInfoProps {
    "email": string;
    "role": string;
}

export type UserTypeProps = {
    id: number
    type: string
}

export interface UserFilterType {
    setFilter: (setFilter: UserTypeProps) => void;
}

