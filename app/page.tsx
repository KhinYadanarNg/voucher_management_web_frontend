import { getCurrentUser } from './auth/getCurrentUser'
import Container from './components/Container'
import CampaignListByCustomer from './components/customer/campaigns/CampaignListByCustomer';
import CampaignListByMerchant from './components/merchant/campaigns/CampaignListByMerchant';

export default async function Home() {
  const currentUser = await getCurrentUser();
  const role = currentUser?.role || '';
  console.log("Printing out of env properties : ", process.env.APP_NAME);

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
