import { fetchStoreListByMerchant } from '@/app/service/store';
import React from 'react'
import NullData from '../../../common/NullData';
import CreateCampaignForm from './CreateCampaignForm';
import { getCurrentUser } from '@/app/auth/getCurrentUser';

const getStoreList = async (email: string) => {
  try {
    const storeList = await fetchStoreListByMerchant(email);
    return storeList;
  } catch (error) {
    console.log(error);
  } finally {

  }
}
export default async function CreateCampaign() {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "MERCHANT") {
    return <NullData title="Oops! Access denied" />;
  }
  const stores = await getStoreList(currentUser.email);

  {
    return (
      stores ? (
        <section className='py-5'>
          <div className='container'>
            <CreateCampaignForm stores={stores.data} currentSessionUser={currentUser}></CreateCampaignForm>
          </div>
        </section>
      ) : (
        <NullData title="Fetch store data failed" />
      ))
  }

}