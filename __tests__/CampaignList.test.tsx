import CampaignList from '@/app/components/campaigns/campaignAsset/CampaignList';
import getCampaignListByMerchant from '@/app/components/merchant/campaigns/campaignsList/page';
import { render, waitFor, screen } from "@testing-library/react";

describe('Campaign List Component', () => {
    it('renders Campaign List within container', async () => {
        render(<CampaignList campaigns={[]} currentSessionUser={{ email: "", name: "", role: "" }} />)
        await waitFor(() => {
            const campaignListByMerchantElement = screen.getByTestId('campaign-list-by-merchant');
            expect(campaignListByMerchantElement).toBeInTheDocument();
        });
    })

    it('renders Campaign List has data', async () => {
        render(<CampaignList campaigns={[]} currentSessionUser={{ email: "", name: "", role: "" }} />)
        await waitFor(async () => {
            const data = await getCampaignListByMerchant();
            expect(data).not.toBeNull;
        })
    });

});