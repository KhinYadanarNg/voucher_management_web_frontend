'use client';
import { useEffect } from "react";

type customStoreType = {
    storeId: string;
    storeName: string;
};
const StoreDetail = () => {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const data = params.get('data');

        const decodedData = data ? JSON.parse(data.toString()) : null;
        const customStoreParams: customStoreType = decodedData
        console.log(customStoreParams.storeName);
    }, []);

    return (
        <div>This is detail</div>
    );
};

export default StoreDetail;