import StoreTable from '@/app/components/merchant/stores/StoreTable';
import getStoreList from '@/app/components/merchant/stores/page';
import { render, screen, waitFor } from '@testing-library/react';

describe('Store Table Component', () => {
    it('renders Store Table within Container', async () => {
        render(<StoreTable stores={[]} />);
        await waitFor(() => {
            const storeListTableElement = screen.getByTestId('store-list-table');
            const storeListTableBodyElement = screen.getByTestId('store-list-table-body');
            expect(storeListTableElement).toBeInTheDocument();
            expect(storeListTableBodyElement).toBeInTheDocument();
        });
    });

    test('Store table component should have column', () => {
        const { getByText } = render(<StoreTable stores={[]} />);
        expect(getByText('Store Name')).toBeInTheDocument();
        expect(getByText('Store Description')).toBeInTheDocument();
    });


    it('renders Store Table has data', async () => {
        render(<StoreTable stores={[]} />);
        await waitFor(async () => {
            const data = await getStoreList();
            expect(data).not.toBeNull;
        })
    });
});
