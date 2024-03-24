'use client'
import { fetchCampaignByID } from '@/app/service/campaign';
import { FeedProps } from '@/type/feed';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

interface FeedCardProps {
    feed: FeedProps;

}

const getCampaignByID = async (campaignID: string) => {
    try {
        const campaign = await fetchCampaignByID(campaignID);
        return campaign;
    } catch (error) {
        console.log(error);
    } finally {
    }
};

const FeedCard = ({ feed }: FeedCardProps) => {
    const router = useRouter();

    const handleViewCampaignDetail = async () => {
        try {
            const campaign = await getCampaignByID(feed.campaignId)
            if (campaign.success) {
                const encodedCamapignData = encodeURIComponent(JSON.stringify(campaign.data));
                const endcodeFeedStatus = encodeURIComponent(JSON.stringify(feed.read));
                router.push(`/components/customer/campaignDetailByFeed?campaign=${encodedCamapignData}&&feedStatus=${endcodeFeedStatus}`)
            }
        } catch {
            toast.error("Failed to fetch campaign detail")
        }
    };


    return (
        <div className='border px-2 py-2'>
            <div className='border px-3 h-32 flex justify-center items-center bg-orange-500'>{feed.feedId}</div>

            <button onClick={handleViewCampaignDetail} className='border-2 hover:bg-orange-300 w-28 h-10 my-3 float-right rounded-3xl'>View
            </button>

        </div>


    )
}
export default FeedCard

