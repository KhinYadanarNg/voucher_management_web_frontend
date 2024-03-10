import Container from './components/Container'
import CampaignList from './components/campaigns/CampaignList'

export default function Home() {
  console.log("Printing out of env properties : ", process.env.APP_NAME);

  return (
    <div className='p-8'>
      <Container>
          <CampaignList/>
      </Container>
    </div>
  )
}
