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
        <div className='card'>
            <div className='sub_cardDetail px-3'>{feed.feedId}</div>
            <button onClick={handleViewCampaignDetail} className='card_button w-20'>View
            </button>

        </div>
    )
}
export default FeedCard

