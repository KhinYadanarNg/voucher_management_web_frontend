'use client'
import { fetchCampaignByID } from '@/app/service/campaign';
import { FeedProps } from '@/type/feed';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import NullData from '../../common/NullData';

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
            const campaign = await getCampaignByID(feed.campaign.campaignId)
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
        <div>
            {
                feed.campaign ? (
                    <div className='card'>
                        <div className='sub_cardDetail px-3'>{feed.campaign.description}</div>
                        <button onClick={handleViewCampaignDetail} className='card_button w-20'>View
                        </button>
                    </div>
                ) : (
                    <NullData title="There is no feed data" />
                )}
        </div>

    )
}
export default FeedCard

