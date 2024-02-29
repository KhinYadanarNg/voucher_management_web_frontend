export type StoreDetailProps = {
    storeId: string;
    storeName: string;
    description: string;
    address: string;
    address1: string;
    address2: string;
    address3: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    image: string;
    contactNumber: string;
}

export type StoreCard = {
    store: StoreDetailProps;
}