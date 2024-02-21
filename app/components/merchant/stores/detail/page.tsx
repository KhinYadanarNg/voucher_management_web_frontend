'use client';
import { useEffect, useState } from "react";
import StoreDetail from "./StoreDetail";

const DetailStore = () => {
    const [storeDetail, setStoreDetail] = useState<any>();
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const storeDetail = params.get('store');

        const decodedStoreData = storeDetail ? JSON.parse(storeDetail.toString()) : null;
        setStoreDetail(decodedStoreData);
    }, []);

    return (
        <div><StoreDetail store={storeDetail}></StoreDetail></div>
    );
};

export default DetailStore;