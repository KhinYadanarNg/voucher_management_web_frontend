"use client";
import { fetchCampaigns } from '@/utils';
import { useEffect, useState } from 'react'
import Campaign from './Campaign';

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);
  const getCampaignList = async () => {
    try {
      const result = await fetchCampaigns();
      setCampaigns(result);
    } catch (error) {
      console.log(error);
    } finally {

    }
  }
  useEffect(() => {
    getCampaignList();
  }, [])

  return (
    <div>
      {campaigns.length > 0 ? (
        <section>
          <div className='home__campaigns-wrapper'>
            {campaigns?.map((campaign) => (
              <Campaign campaign={campaign} key={campaign} />
            ))}
          </div>
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-x1 font-bold">Oops, no results</h2>
        </div>
      )}
    </div>
  )
}

export default CampaignList


