import { VoucherProps } from '@/type/voucher'
import React from 'react'
import Voucher from './Voucher'

const VoucherList = ({vouchers} : {vouchers: VoucherProps[]}) => {
    return (
        <section data-testid='campaign-list-by-merchant'>
            <div className='home__campaigns-wrapper'>
                {vouchers.map((voucher: VoucherProps) => (
                    <Voucher voucher={voucher} key={voucher.voucherId} />
                ))}
            </div>
        </section>
    )
}

export default VoucherList