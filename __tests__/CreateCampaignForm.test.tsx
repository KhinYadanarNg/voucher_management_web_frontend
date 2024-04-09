import CreateCampaignForm from '@/app/components/merchant/campaigns/createCampaign/CreateCampaignForm';
import  getStoreList from '@/app/components/merchant/campaigns/createCampaign/page';
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
    
            const startDateTextField = screen.getByTestId("startDate-textfield-id");
            expect(startDateTextField).toHaveAttribute('required');

            const endDateTextField = screen.getByTestId("endDate-textfield-id");
            expect(endDateTextField).toHaveAttribute('required');

            const amountTextField = screen.getByTestId("amount-textfield-id");
            expect(amountTextField).toHaveAttribute('required');

            const maxVouchersTextField = screen.getByTestId("maxVouchers-textfield-id");
            expect(maxVouchersTextField).toHaveAttribute('required');

            const tandcTextField = screen.getByTestId("tandc-textfield-id");
            expect(tandcTextField).not.toBeRequired()
            
        } else {
            const titleTextField = screen.getByTestId("empty-data");
            expect(titleTextField).toBeInTheDocument
        }
      
    });

    it('renders Create Store Form Table has store data', async () => {
        render(<CreateCampaignForm stores={[]} currentSessionUser={{ email: "", name: "", role: "" }} />);
        await waitFor(async () => {
            const data = await getStoreList()
            expect(data).not.toBeNull;
        })
    });
});