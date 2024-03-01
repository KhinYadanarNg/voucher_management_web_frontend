'use client';
import { useEffect, useState } from "react";
import StoreDetail from "./StoreDetail";
import { StoreDetailProps } from "@/type/store";
import Provider from "@/app/components/common/Provider";

const DetailStore = () => {
    const [storeDetail, setStoreDetail] = useState<StoreDetailProps>();
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const storeDetail = params.get('store');

        const decodedStoreData = storeDetail ? JSON.parse(storeDetail.toString()) : null;
        setStoreDetail(decodedStoreData);
    }, []);

    return (
        <div><Provider>{storeDetail && <StoreDetail store={storeDetail} />}</Provider></div>
    );
};

export default DetailStore;