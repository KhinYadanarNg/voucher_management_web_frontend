import Campaign from '@/app/components/campaigns/campaignAsset/Campaign';
import CampaignList from '@/app/components/campaigns/campaignAsset/CampaignList';
import getCampaignListByMerchant from '@/app/components/merchant/campaigns/campaignsList/page';
import { render, waitFor, screen } from "@testing-library/react";

jest.mock('next/navigation');

describe('Campaign List Component', () => {
    it('renders Campaign List within container', async () => {
        render(<CampaignList campaigns={[]} currentSessionUser={{ email: "", name: "", role: "" }} pageNumber={0} totalRecord={0} size={0} redirectPath={''} />)
        await waitFor(() => {
            const campaignListByMerchantElement = screen.getByTestId('campaign-list-by-merchant');
            expect(campaignListByMerchantElement).toBeInTheDocument();
        });
    })

    it('renders Campaign List has data', async () => {
        render(<CampaignList campaigns={[]} currentSessionUser={{ email: "", name: "", role: "" }} pageNumber={0} totalRecord={0} size={0} redirectPath={''} />)
        await waitFor(async () => {
            const data = await getCampaignListByMerchant({
                searchParams: { page: "0" }
            });
            expect(data).not.toBeNull;
        })
    });


    it('renders Campaign card within container', async () => {
        render(<Campaign campaign={{
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
        }} userRole='' userEmail='' />)
        await waitFor(async () => {
            const campaignCardElement = screen.getByTestId('campaign-card-id');
            expect(campaignCardElement).toBeInTheDocument();
        })
    });

});