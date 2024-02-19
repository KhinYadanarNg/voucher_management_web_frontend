'use client';
import { useEffect } from "react";
import StoreDetail from "./StoreDetail";
import { fetchStoreListByMerchant } from "@/app/service/store";

type customStoreType = {
    storeId: string;
    storeName: string;
};

const getStoreList = async () => {
    try {
        const storeList = await fetchStoreListByMerchant();
        return storeList;
    } catch (error) {
        console.log(error);
    } finally {

    }
}
const DetailStore = async () => {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const data = params.get('data');

        const decodedData = data ? JSON.parse(data.toString()) : null;
        const customStoreParams: customStoreType = decodedData
        console.log(customStoreParams.storeName);
    }, []);

    const stores = await getStoreList();

    return (
        <div><StoreDetail store={stores[0]}></StoreDetail></div>
    );
};

export default DetailStore;