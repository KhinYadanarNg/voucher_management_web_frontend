import { StoreDetailProps } from "@/type/store";
import NullData from "@/app/components/common/NullData";
import UpdateStoreForm from "./UpdateStoreForm";
import { getCurrentUser } from "@/app/auth/getCurrentUser";

const UpdateStore = async ({ searchParams }: {
    searchParams: {
        store: StoreDetailProps
    }
}) => {
    const currentUser = await getCurrentUser();
    const decodedStoreData = searchParams.store ? JSON.parse(searchParams.store.toString()) : null;

    {
        return (
            currentUser ? (<div>{decodedStoreData && <UpdateStoreForm store={decodedStoreData} />}</div>) : (
                <NullData title="Oops Access denied" />)
        )
    }
};

export default UpdateStore;
