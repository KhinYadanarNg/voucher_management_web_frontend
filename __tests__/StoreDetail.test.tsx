import StoreDetail from '@/app/components/merchant/stores/detail/StoreDetail';
import { render, screen, waitFor } from '@testing-library/react';

jest.mock('next/navigation');
describe('Store Detail Component', () => {
    it('renders Store Detail component within Container', async () => {
        render(<StoreDetail store={{
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
        }} />);
        await waitFor(() => {
            const storeDetailElement = screen.getByTestId('store-detail-id');
            expect(storeDetailElement).toBeInTheDocument();
        
        });
    });
});
