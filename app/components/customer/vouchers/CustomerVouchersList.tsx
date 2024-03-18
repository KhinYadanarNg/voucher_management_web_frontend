import { VoucherListParamsProps, VoucherProps } from '@/type/vouhcer'
import React from 'react'
import Voucher from './Voucher';
import NullData from '../../common/NullData';


const CustomerVouchersList = ({ vouchers, currentSessionUser }: VoucherListParamsProps) => {
  const userEmail = currentSessionUser.email; //To apply in "Use" voucher function

  return (
    <div data-testid='voucher-list-by-customer'>
      {vouchers ? (
        <div>
          <div className='font-semibold mt-5 ml-4'>Vouchers Collection</div>
          <section>
            <div className='home__campaigns-wrapper'>
              {vouchers.map((voucher: VoucherProps) => (

                <Voucher voucher={voucher} key={voucher.voucherId}/>
              ))}
            </div>
          </section></div>) : (
        <NullData title="There is no voucher list" />
      )}
    </div>
  )
}

export default CustomerVouchersList