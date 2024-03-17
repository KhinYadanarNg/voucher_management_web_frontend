'use client'
import React from 'react'
import { VoucherProps } from '@/type/voucher';

interface VoucherCardProps {
    voucher: VoucherProps;

}

const Voucher = ({ voucher }: VoucherCardProps) => {

    const handleUseVoucher = () => {
        if (window.confirm('Are you sure you want to use this voucher?')) {
          console.log('Confirm to use voucher');
        } else {
            console.log('Cancel to use voucher');
        }
      };
    return (
        <div className='border px-2 py-2'>
         <div className='border mt-3 px-2 grid grid-cols-2'>
                <div className='border h-32 flex justify-center items-center bg-orange-500'>{voucher.storeName}</div>
                <div>
                    <p className='px-2 py-3'>${voucher.amount} off</p>
                    <p className='px-2'>Valid till: {voucher.validDate}</p>
                </div>
            </div>

            <button onClick={handleUseVoucher} className='border-2 hover:bg-orange-300 w-20 h-8 my-3 float-right rounded-3xl'>Use
            </button>
        </div>
       

    )
}
export default Voucher