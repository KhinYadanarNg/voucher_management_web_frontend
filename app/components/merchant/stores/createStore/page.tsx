import { getCurrentUser } from '@/app/auth/getCurrentUser';
import Container from '@/app/components/Container';
import NullData from '@/app/components/common/NullData';
import React from 'react'
import CreateStoreForm from './CreateStoreForm';

const CreateStore = async () => {

    const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "MERCHANT") {
    return <NullData title="Oops! Access denied" />;
  }
  
  return (
    <div>
        <Container>
            <CreateStoreForm currentUser={currentUser}/>
        </Container>
    </div>
  )
}

export default CreateStore