import CustomerVouchersList from '@/app/components/customer/vouchers/CustomerVouchersList';
import Voucher from '@/app/components/customer/vouchers/Voucher';
import getVouchersByCustomerEmail from '@/app/components/customer/vouchers/page';
import { VoucherProps } from '@/type/vouhcer';

import { render, waitFor, screen } from "@testing-library/react";

describe('Customer Voucher List Component', () => {
    it('renders Customer Voucher List within container', async () => {
        render(<CustomerVouchersList vouchers={[]} currentSessionUser={{ email: "", name: "", role: "" }} pageNumber={0} totalRecord={0} size={0} />)
        await waitFor(() => {
            const customerVoucherListElement = screen.getByTestId('voucher-list-by-customer');
            expect(customerVoucherListElement).toBeInTheDocument();
        });
    })

    it('renders Customer Voucher Card within container', async () => {
        const voucherCard: VoucherProps = {
            "voucherId": '',
            "campaign": {
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
            },
            "voucherStatus": '',
            "amount": 0,
            "claimTime": '',
            "consumedTime": '',
            "storeName": '',
            "validDate": ''
        }
        render(<Voucher voucher={voucherCard} />)
        await waitFor(() => {
            const customerVoucherListElement = screen.getByTestId('voucher-card');
            expect(customerVoucherListElement).toBeInTheDocument();
        });
    })

    it('renders Customer Voucher List has data', async () => {
        render(<CustomerVouchersList vouchers={[]} currentSessionUser={{ email: "", name: "", role: "" }} pageNumber={0} totalRecord={0} size={0} />)
        await waitFor(async () => {
            const data = await getVouchersByCustomerEmail({
                searchParams: { page: "0" }
            })
            expect(data).not.toBeNull;
        })
    });

});