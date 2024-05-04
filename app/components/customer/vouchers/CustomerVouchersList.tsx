import { VoucherListParamsProps, VoucherProps } from '@/type/vouhcer'
import React from 'react'
import Voucher from './Voucher';
import NullData from '../../common/NullData';
import PaginationLink from '../../common/PaginationLink';


const CustomerVouchersList = ({ vouchers, currentSessionUser, pageNumber, totalRecord, size }: VoucherListParamsProps) => {
  const userEmail = currentSessionUser.email; //To apply in "Use" voucher function

  return (
    <div data-testid='voucher-list-by-customer'>
      {vouchers && vouchers.length > 0 ? (
        <div>
          <div className='font-semibold mt-5 ml-4'>Vouchers Collection</div>
          <section>
            <div className='home__campaigns-wrapper'>
              {vouchers.map((voucher: VoucherProps) => (

                <Voucher voucher={voucher} key={voucher.voucherId} />
              ))}
            </div>
            <PaginationLink pageNumber={pageNumber} totalRecord={totalRecord} size={size} path={'/components/customer/vouchers'}></PaginationLink>
          </section></div>) : (
        <NullData title="There is no voucher list" />
      )}
    </div>
  )
}

export default CustomerVouchersList