"use client";
import { useEffect, useState } from 'react'
import Campaign from './Campaign';
import { fetchCampaigns } from '@/app/service/campaign';
import { useRouter } from 'next/navigation';

const CampaignList = () => {

  const router = useRouter();

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
    <div >
      {campaigns.length > 0 ? (
        <section>
          <div className='home__campaigns-wrapper'>
            {campaigns?.map((campaign) => (
              <Campaign campaign={campaign} key={campaign} />
            ))}
          </div>
        </section>
      ) : (
        // <div className="home__error-container">
        //   <h2 className="text-black text-x1 font-bold">Oops, no results</h2>
        // </div>

        // onClick={() => router.push('/campaign/1')}
        <div onClick={() => router.push('/campaign/1')}
            className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50
                      rounded-sm p-2 trnsition hover:scale-105 text-center text-sm" data-testid="campaign-list"
        >
           <div>This is campaign list</div>
        </div>
      )}
    </div>
  )
}

export default CampaignList


