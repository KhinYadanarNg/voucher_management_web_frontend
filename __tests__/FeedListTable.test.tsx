import { render, waitFor, screen } from "@testing-library/react";
import getAllActiveFeedListByCustomer from '@/app/components/customer/feeds/page';
import FeedListTable from '@/app/components/customer/feeds/FeedListTable';

describe('Feed List Component By Customer', () => {
    it('renders Feed List within container', async () => {
        render(<FeedListTable feeds={[]} />)
        await waitFor(() => {
            const feedListTable = screen.getByTestId('feed-list-table');
            const feedListTableBody = screen.getByTestId('feed-list-table-body');
            expect(feedListTable).toBeInTheDocument();
            expect(feedListTableBody).toBeInTheDocument();
        });
    })

    it('renders Feed List has data', async () => {
        render(<FeedListTable feeds={[]} />)
        await waitFor(async () => {
            const data = await getAllActiveFeedListByCustomer();
            expect(data).not.toBeNull;
        })
    });

});