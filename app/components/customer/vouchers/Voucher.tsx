'use client'
import { VoucherProps } from '@/type/vouhcer';
import dateformat from 'dateformat';
import { consumeVoucherByCustomer } from '@/app/service/vouchers';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';

interface VoucherCardProps {
    voucher: VoucherProps;

}

const Voucher = ({ voucher }: VoucherCardProps) => {

    const validDate = dateformat(voucher.campaign.endDate, "dd/mm/yyyy");
    const [buttonText, setButtonText] = useState("");


    useEffect(() => {
        function updateButtonText() {
            if (voucher.voucherStatus == 'CONSUMED') {
                setButtonText("Consumed")
            } else {
                setButtonText("Consume")
            }
        }
        updateButtonText()
    }, [voucher.voucherStatus]);

    const handleUseVoucher = async () => {
        if (window.confirm('Are you sure you want to use this voucher?')) {
            try {
                if (voucher.voucherStatus == 'CONSUMED') {
                    toast.error("This voucher has been consumed.");
                    return;
                }
                const response = await consumeVoucherByCustomer(voucher.voucherId);
                const { success, message, data } = response;
                if (success) {
                    toast.success(message);
                    setButtonText("Consumed")
                } else {
                    toast.error(message);
                }
            } catch {
                toast.error("Fail to consume voucher")
            }
        }
    };


    return (
        <div className='card' data-testid='voucher-card'>
            <div className='sub_card'>
                <div className='sub_cardDetail'>{voucher.campaign.store.storeName}</div>
                <div>
                    <p className='card_padding'>${voucher.amount} off</p>
                    <p className='px-2'>Valid till: {validDate}</p>
                </div>
            </div>
            <button onClick={handleUseVoucher} className='card_button w-32'>{buttonText}
            </button>
        </div>


    )
}
export default Voucher

