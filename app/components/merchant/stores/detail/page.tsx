'use client';
import { useEffect, useState } from "react";
import StoreDetail from "./StoreDetail";
import { StoreDetailProps } from "@/type/store";
import NullData from "@/app/components/common/NullData";
import { useSession } from "next-auth/react";

const DetailStore = () => {
    const [storeDetail, setStoreDetail] = useState<StoreDetailProps>();
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const storeDetail = params.get('store');

        const decodedStoreData = storeDetail ? JSON.parse(storeDetail.toString()) : null;
        setStoreDetail(decodedStoreData);
    }, []);

    const { data: session } = useSession();
    const currentUser = session?.user;

    {
        return (
            currentUser ? (<div>{storeDetail && <StoreDetail store={storeDetail} />}</div>) : (
                <NullData title="Oops Access denied" />
            )
        );
    }
};

export default DetailStore;