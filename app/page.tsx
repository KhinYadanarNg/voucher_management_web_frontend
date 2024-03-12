import Container from './components/Container'
import CampaignList from './components/campaigns/CampaignList'

export default function Home() {
  console.log("Printing out of env properties in main page : ", process.env.APP_NAME);
  console.log('Priting the api endpoint in main page : ', process.env.NEXT_PUBLIC_APP_API_ENDPOINT);

  return (
    <div className='p-8'>
      <Container>
          <CampaignList/>
      </Container>
    </div>
  )
}
