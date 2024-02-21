import StoreDetail from '@/app/components/merchant/stores/detail/StoreDetail';
import { render, screen, waitFor } from '@testing-library/react';

describe('Store Detail Component', () => {
    it('renders Store Detail component within Container', async () => {
        render(<StoreDetail store={{
            storeID: '',
            storeName: '',
            storeDesc: '',
            storeAddress: '',
            storeCreatedDate: ''
        }} />);
        await waitFor(() => {
            const storeDetailElement = screen.getByTestId('store-detail-id');
            expect(storeDetailElement).toBeInTheDocument();
        
        });
    });
});
