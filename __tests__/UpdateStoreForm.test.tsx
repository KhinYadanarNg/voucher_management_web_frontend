import UpdateStoreForm from "@/app/components/merchant/stores/updateStore/UpdateStoreForm";
import { render, screen, waitFor } from '@testing-library/react';

jest.mock('next/navigation');

describe('Update store form Component', () => {
    it('renders Update store From within container', async () => {
        render(<UpdateStoreForm store={{
            storeId: "",
            storeName: "",
            description: "",
            address: "",
            address1: "",
            address2: "",
            address3: "",
            city: "",
            state: "",
            country: "",
            postalCode: "",
            image: "",
            contactNumber: ""
        }} currentSessionUser={{ email: "", name: "", role: "" }} />);
        await waitFor(async () => {
            const updateStoreForm = screen.getByTestId('update-store-form');
            expect(updateStoreForm).toBeInTheDocument();
        });
    });

    it('Update store form required field', () => {
        render(<UpdateStoreForm store={{
            storeId: "",
            storeName: "",
            description: "",
            address: "",
            address1: "",
            address2: "",
            address3: "",
            city: "",
            state: "",
            country: "",
            postalCode: "",
            image: "",
            contactNumber: ""
        }} currentSessionUser={{ email: "", name: "", role: "" }} />);

        const storeNameTextField = screen.getByTestId("store-name");
        expect(storeNameTextField).toBeRequired();

        const startDescTextField = screen.getByTestId("store-desc");
        expect(startDescTextField).toHaveAttribute('required');
    });
});





