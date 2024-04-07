import React from 'react'
import CustomerStoreLists from './CustomerStoreLists'
import { getCurrentUser } from '@/app/auth/getCurrentUser';
import NullData from '../../common/NullData';
import { fetchAllActiveStore } from '@/app/service/store';
import { pageSize } from '@/utils';


const getActiveStoreListByCustomer = async (pageNumber: number, size: number) => {
  try {
    const storeList = await fetchAllActiveStore(pageNumber - 1, size);
    return storeList;
  } catch (error) {
    console.log(error);
  } finally {

  }
}

export default async function StoreListByCustomer({ searchParams }: {
  searchParams: {
    page: string;
  }
}) {

  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <NullData title="Oops! Access denied" />;
  }

  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1
  const size = pageSize;
  const stores = await getActiveStoreListByCustomer(page, size);

  return (
    <div>
      {stores ? (<CustomerStoreLists stores={stores.data} pageNumber={page} totalRecord={stores.totalRecord} size={size} />
      ) : (
        <NullData title="Fetch data failed" />
      )}

    </div>
  )
}