import { VoucherListParamsProps, VoucherProps } from '@/type/vouhcer'
import React from 'react'
import Voucher from './Voucher';
import NullData from '../../common/NullData';


const CustomerVouchersList = ({ vouchers, currentSessionUser }: VoucherListParamsProps) => {
  const userEmail = currentSessionUser.email; //To apply in "Use" voucher function

  return (
    <main data-testid='voucher-list-by-merchant'>
      {vouchers.length > 0 ? (
        <div>
          <div className='font-semibold mt-5 ml-4'>Vouchers Collection</div>
          <section>
            <div className='home__campaigns-wrapper'>
              {vouchers.map((voucher: VoucherProps) => (

                <Voucher voucher={voucher} key={voucher.voucherId} userEmail={userEmail} />
              ))}
            </div>
          </section></div>) : (
        <NullData title="There is no voucher list" />
      )}
    </main>
  )
}

export default CustomerVouchersList