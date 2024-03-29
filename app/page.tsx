import React from 'react'
import Container from './components/Container';
import { getCurrentUser } from './auth/getCurrentUser';
import CampaignListByMerchant from './components/merchant/campaigns/page';
import CampaignListByCustomer from './components/customer/campaigns/page';

export default async function Home() {
  const currentUser = await getCurrentUser();
  const role = currentUser?.role || '';

  console.log("Checking the api url : ", process.env.serverURL);

  return (
    <div data-testid='home'>
      <Container>
        {role === "MERCHANT" ? (
          <CampaignListByMerchant />
        ) : (
          <CampaignListByCustomer />
        )}
      </Container>
    </div>
  )
}