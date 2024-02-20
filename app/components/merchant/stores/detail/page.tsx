'use client';
import { useEffect, useState } from "react";
import StoreDetail from "./StoreDetail";

const DetailStore = () => {
    const [storeDetail, setStoreDetail] = useState<any>();
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const data = params.get('store');

        const decodedData = data ? JSON.parse(data.toString()) : null;
        setStoreDetail(decodedData);
    }, []);

    return (
        <div><StoreDetail store={storeDetail}></StoreDetail></div>
    );
};

export default DetailStore;