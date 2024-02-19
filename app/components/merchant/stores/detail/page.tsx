'use client';
import { useEffect } from "react";
import StoreDetail from "./StoreDetail";

type customStoreType = {
    storeId: string;
    storeName: string;
};
const DetailStore = () => {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const data = params.get('data');

        const decodedData = data ? JSON.parse(data.toString()) : null;
        const customStoreParams: customStoreType = decodedData
        console.log(customStoreParams.storeName);
    }, []);

    return (
        <div><StoreDetail></StoreDetail></div>
    );
};

export default DetailStore;