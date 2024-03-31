import StoreTable from '@/app/components/merchant/stores/StoreTable';
import getStoreList from '@/app/components/merchant/stores/page';
import { render, screen, waitFor } from '@testing-library/react';

describe('Store Table Component', () => {
    it('renders Store Table within Container', async () => {
        render(<StoreTable stores={[]} pageNumber={0} totalRecord={0} size={0} />);
        await waitFor(() => {
            const storeListTableElement = screen.getByTestId('store-list-table');
            const storeListTableBodyElement = screen.getByTestId('store-list-table-body');
            expect(storeListTableElement).toBeInTheDocument();
            expect(storeListTableBodyElement).toBeInTheDocument();
        });
    });

    test('Store table component should have column', () => {
        const { getByText } = render(<StoreTable stores={[]} pageNumber={0} totalRecord={0} size={0} />);
        expect(getByText('Store Name')).toBeInTheDocument();
        expect(getByText('Store Description')).toBeInTheDocument();
    });


    it('renders Store Table has data', async () => {
        render(<StoreTable stores={[]} pageNumber={0} totalRecord={0} size={0} />);
        await waitFor(async () => {
            const data = await getStoreList({
                searchParams: { page: "0" }
            });
            expect(data).not.toBeNull;
        })
    });
});
