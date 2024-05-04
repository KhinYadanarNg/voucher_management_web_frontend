import StoreDetail from "./StoreDetail";
import { StoreDetailProps } from "@/type/store";
import NullData from "@/app/components/common/NullData";
import { getCurrentUser } from "@/app/auth/getCurrentUser";

const DetailStore = async ({ searchParams }: {
    searchParams: {
        store: StoreDetailProps
    }
}) => {
    const currentUser = await getCurrentUser();
    const decodedStoreData = searchParams.store ? JSON.parse(searchParams.store.toString()) : null;

    {
        return (
            currentUser ? (<div>{decodedStoreData && <StoreDetail store={decodedStoreData} />}</div>) : (
                <NullData title="Oops Access denied" />
            )
        );
    }
};

export default DetailStore;