import CustomerVouchersList from '@/app/components/customer/vouchers/CustomerVouchersList';
import  getVouchersByCustomerEmail from '@/app/components/customer/vouchers/page';

import { render, waitFor, screen } from "@testing-library/react";

describe('Customer Voucher List Component', () => {
    it('renders Customer Voucher List within container', async () => {
        render(<CustomerVouchersList vouchers={[]} currentSessionUser={{ email: "", name: "", role: "" }} pageNumber={0} totalRecord={0} size={0}/>)
        await waitFor(() => {
            const customerVoucherListElement = screen.getByTestId('voucher-list-by-customer');
            expect(customerVoucherListElement).toBeInTheDocument();
        });
    })

    it('renders Customer Voucher List has data', async () => {
        render(<CustomerVouchersList vouchers={[]} currentSessionUser={{ email: "", name: "", role: "" }} pageNumber={0} totalRecord={0} size={0}/>)
        await waitFor(async () => {
            const data = await getVouchersByCustomerEmail({
                searchParams: { page: "0" }
            })
            expect(data).not.toBeNull;
        })
    });

});