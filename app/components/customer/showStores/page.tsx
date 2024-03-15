import React from 'react'
import CustomerStoreLists from './CustomerStoreLists'
import { getCurrentUser } from '@/app/auth/getCurrentUser';
import NullData from '../../common/NullData';

const page = async () => {

  const currentUser = await getCurrentUser();

  if (!currentUser ) {
    return <NullData title="Oops! Access denied" />;
  }
  
  return (
    <div>
      <CustomerStoreLists/>
    </div>
  )
}

export default page