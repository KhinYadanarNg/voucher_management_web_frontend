import { VoucherListParamsProps, VoucherProps } from '@/type/vouhcers'
import React from 'react'


const CustomerVouchersList = ({ vouchers, currentSessionUser }: VoucherListParamsProps) => {
  return (
    <div>
      <div className='font-semibold'>My Vouchers</div>
    </div>
  )
}

export default CustomerVouchersList