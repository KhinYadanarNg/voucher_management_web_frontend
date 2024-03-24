import CreateCampaignForm from '@/app/components/merchant/campaigns/createCampaign/CreateCampaignForm';
import { StoreDetailProps } from '@/type/store';
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


    it('Create campaign form required field', () => {
        const storeList: StoreDetailProps[] =  [{
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
        }]
        render(<CreateCampaignForm stores={storeList} currentSessionUser={{ email: "", name: "", role: "" }} />)
        if (storeList.length > 0) {
            const titleTextField = screen.getByTestId("title-textfield-id");
            expect(titleTextField).toBeRequired();
    
            const startDateTextField = screen.getByTestId("startdate-textfield-id");
            expect(startDateTextField).toHaveAttribute('required');
        } else {
            const titleTextField = screen.getByTestId("empty-data");
            expect(titleTextField).toBeInTheDocument
        }
      
    });
});