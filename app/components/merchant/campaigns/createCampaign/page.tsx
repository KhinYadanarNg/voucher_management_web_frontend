import { fetchStoreListByMerchant } from '@/app/service/store';
import React from 'react'
import NullData from '../../../common/NullData';
import CreateCampaignForm from './CreateCampaignForm';
import { getCurrentUser } from '@/app/auth/getCurrentUser';

const getStoreList = async () => {
  try {
    const storeList = await fetchStoreListByMerchant();
    return storeList;
  } catch (error) {
    console.log(error);
  } finally {

  }
}
export default async function CreateCampaign() {
  const stores = await getStoreList();
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "MERCHANT") {
    return <NullData title="Oops! Access denied" />;
  }
  {
    return (
      stores ? (
        <section className='py-5'>
          <div className='container'>
            <CreateCampaignForm stores={stores.result} currentSessionUser={currentUser}></CreateCampaignForm>
          </div>
        </section>
      ) : (
        <NullData title="Fetch data failed" />
      ))
  }

}