import { VoucherListParamsProps, VoucherProps } from '@/type/vouhcer'
import React from 'react'
import Voucher from './Voucher';


const CustomerVouchersList = ({ vouchers, currentSessionUser }: VoucherListParamsProps) => {
  const userEmail = currentSessionUser.email; //To apply in "Use" voucher function

  return (
    <>
      <div className='font-semibold mt-5 ml-4'>Vouchers Collection</div>
      <section data-testid='campaign-list-by-merchant'>
            <div className='home__campaigns-wrapper'>
                {vouchers.map((voucher: VoucherProps) => (
                  
                    <Voucher voucher={voucher} key={voucher.voucherId} userEmail={userEmail}/>
                ))}
            </div>
        </section>
        </>
  )
}

export default CustomerVouchersList