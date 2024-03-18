import CampaignDetail from '@/app/components/merchant/campaigns/detail/CampaignDetail';
import { render, waitFor, screen } from "@testing-library/react";

jest.mock('next/navigation');

describe('Campaign List Component', () => {
    it('renders Campaign List within container', async () => {
        render(<CampaignDetail campaign={{
            campaignId: '',
            description: '',
            numberOfVouchers: 0,
            numberOfLikes: 0,
            tagsJson: '',
            tandc: '',
            amount: 0.0,
            startDate: '',
            endDate: '',
            store: {
                storeId: '',
                storeName: '',
                description: '',
                address: '',
                address1: '',
                address2: '',
                address3: '',
                city: '',
                state: '',
                country: '',
                postalCode: '',
                image: '',
                contactNumber: ''
            },
            campaignStatus: '',
            numberOfClaimedVouchers: 0,
            pin: ''
        }} currentSessionUser={{ email: "", name: "", role: "" }}></CampaignDetail>)
        await waitFor(() => {
            const campaignListByMerchantElement = screen.getByTestId('campaign-detail-id');
            expect(campaignListByMerchantElement).toBeInTheDocument();
        });
    })
});