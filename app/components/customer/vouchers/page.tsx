import React from 'react'
import VoucherList from './VoucherList'
import { getCurrentUser } from '@/app/auth/getCurrentUser'
import NullData from '../../common/NullData';
import { getVoucherListByCustomer } from '@/app/service/vouchers';

const fetchVoucherListByCustomer = async () => {
    try {
        const vouchers = await getVoucherListByCustomer();
        return vouchers;
    } catch (error) {
        console.log(error);
    } finally {

    }
}

const VoucherCollection = async () => {
    const currentUser = await getCurrentUser();
    if (!currentUser || currentUser.role !== "CUSTOMER") {
        return <NullData title="Oops! Access denied" />;
    }
    const voucherList = await fetchVoucherListByCustomer();
    return (
        <div>
            {voucherList ?
                (<VoucherList vouchers={voucherList} />
                ) : (
                    <NullData title="Fetch data failed" />
                )}
        </div>
    )
}

export default VoucherCollection