import FeedListCard from '@/app/components/customer/feeds/FeedListCard';
import { render, waitFor, screen } from "@testing-library/react";
import getAllActiveFeedListByCustomer from '@/app/components/customer/feeds/page';

describe('Feed List Component By Customer', () => {
    it('renders Feed List within container', async () => {
        render(<FeedListCard feeds={[]} />)
        await waitFor(() => {
            const campaignListByMerchantElement = screen.getByTestId('feed-list-by-customer');
            expect(campaignListByMerchantElement).toBeInTheDocument();
        });
    })

    it('renders Feed List has data', async () => {
        render(<FeedListCard feeds={[]} />)
        await waitFor(async () => {
            const data = await getAllActiveFeedListByCustomer();
            expect(data).not.toBeNull;
        })
    });

});