import React from 'react'
import Container from './components/Container';
import { getCurrentUser } from './auth/getCurrentUser';
import CampaignListByMerchant from './components/merchant/campaigns/campaignsList/page';
import CampaignListByCustomer from './components/customer/campaigns/page';

export default async function Home({ searchParams }: {
  searchParams: {
    page: string;
  }
}) {
  const currentUser = await getCurrentUser();
  const role = currentUser?.role || '';
  const pageNumber =
    typeof searchParams.page === 'string' ? searchParams.page : "1"

  return (
    <div data-testid='home'>
      <Container>
        {role === "MERCHANT" ? (
          <CampaignListByMerchant searchParams={{
            page: pageNumber,
            isHome: "true"
          }} />
        ) : (
          <CampaignListByCustomer searchParams={{
              page: pageNumber,
              isHome: "true"
            }} />
        )}
      </Container>
    </div>
  )
}