import CreateCampaignForm from '@/app/components/merchant/campaigns/createCampaign/CreateCampaignForm';
import { Label } from '@headlessui/react/dist/components/label/label';
import { render, waitFor, screen, within } from "@testing-library/react";

jest.mock('next/navigation');

describe('Create Campaign Form Component', () => {

    it('renders Create Campaign Form within container', async () => {
        render(<CreateCampaignForm stores={[]} currentSessionUser={{ email: "", name: "", role: "" }} />)
        await waitFor(() => {
            const campaignFormElement = screen.getByTestId('create-campaignForm');
            expect(campaignFormElement).toBeInTheDocument();
        });
    })
});