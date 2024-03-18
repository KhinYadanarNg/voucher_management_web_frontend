import CreateCampaignForm from '@/app/components/merchant/campaigns/createCampaign/CreateCampaignForm';
import { render, waitFor, screen } from "@testing-library/react";

jest.mock('next/navigation');

describe('Campaign List Component', () => {

    it('renders Campaign List within container', async () => {
        render(<CreateCampaignForm  stores={[]} currentSessionUser={{ email: "", name: "", role: "" }}></CreateCampaignForm>)
        await waitFor(() => {
            const campaignListByMerchantElement = screen.getByTestId('create-campaignForm');
            expect(campaignListByMerchantElement).toBeInTheDocument();
        });
    })
});