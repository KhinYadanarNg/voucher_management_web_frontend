import CreateCampaignForm from '@/app/components/merchant/campaigns/createCampaign/CreateCampaignForm';
import { render, waitFor, screen } from "@testing-library/react";

jest.mock('next/navigation');

describe('Create Campaign Form Component', () => {

    it('renders Create Campaign Form within container', async () => {
        render(<CreateCampaignForm stores={[]} currentSessionUser={{ email: "", name: "", role: "" }} />)
        await waitFor(() => {
            const campaignFormElement = screen.getByTestId('create-campaignForm');
            expect(campaignFormElement).toBeInTheDocument();
        });
    })



    it('Create campaign form required field', () => {
        render(<CreateCampaignForm stores={[]} currentSessionUser={{ email: "", name: "", role: "" }} />)
        const conditionTextField = screen.getByTestId("condition1-textfield-id")
        expect(conditionTextField).not.toBeRequired();

        const titleTextField = screen.getByTestId("title-textfield-id");
        expect(titleTextField).toBeRequired();

        const startDateTextField = screen.getByTestId("startdate-textfield-id");
        expect(startDateTextField).toHaveAttribute('required');
    });


});