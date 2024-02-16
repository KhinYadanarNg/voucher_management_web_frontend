import Container from './components/Container'
import CampaignList from './components/CampaignList'

export default function Home() {
  return (
    <div className='p-8'>
      <Container>
          <CampaignList/>
      </Container>
    </div>
  )
}
