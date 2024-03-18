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

    const handleUseVoucher = async (event: React.MouseEvent<HTMLButtonElement>) => {
        if (window.confirm('Are you sure you want to use this voucher?')) {
            try {
                let useVoucherButton = event.target as HTMLInputElement;
                const response = await consumeVoucherByCustomer(useVoucherButton.id);
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
        <div className='border px-2 py-2'>
            <div className='border mt-3 px-2 grid grid-cols-2'>
                <div className='border h-32 flex justify-center items-center bg-orange-500'>{voucher.campaign.store.storeName}</div>
                <div>
                    <p className='px-2 py-3'>${voucher.amount} off</p>
                    <p className='px-2'>Valid till: {validDate}</p>
                </div>
            </div>
            <button type='submit' id={voucher.voucherId} onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleUseVoucher(event)} className='border-2 hover:bg-orange-300 w-32 h-10 my-3 float-right rounded-3xl'>{buttonText}
            </button>
        </div>


    )
}
export default Voucher

