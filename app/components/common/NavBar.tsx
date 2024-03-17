import React from 'react'
import Container from '../Container';
import Image from 'next/image';
import nusLogo from '/public/assets/icons/nus_logo.png';
import Link from 'next/link';
import { getCurrentUser } from '@/app/auth/getCurrentUser';
import Avatar from './Avatar';
import LogOut from './LogOut';
import MerchantNavBar from './MerchantNavBar';
import CustomerNavBar from './CustomerNavBar';


const NavBar = async () => {

  const currentUser = await getCurrentUser();

  return (
    <div className='sticky top-0 w-full bg-[#F07D13] z-30 shadow-sm'>
      <div className='py-4'>
        <Container>
          <div className='flex items-center justify-between gap-2 md-gap-0'>
            <Image src={nusLogo} alt='' width={97} height={35} className='justify-center object-contain' priority />
            <div className='flex place-items-center gap-2 md:gap-4'>
              <div className='text-white text-xl'>

                {currentUser ? (
                  <Avatar src={currentUser?.image}/>
                ):(
                  <Link href={'/components/login'}>
                  <span>Log in</span>
                </Link>
                )}
              </div>
              <div className='h-full text-white text-2xl'>|</div>
              <div className='text-white text-xl'>

              {currentUser ? (
                <LogOut/>
                ):(
                  <Link href={'/components/register'}>
                  <span>Sign up</span>
                </Link>
                )}

                
              </div>
            </div>
          </div>
          
        </Container>
      </div>

      <div >
      {currentUser && currentUser.role === 'MERCHANT' && <MerchantNavBar />}
      {currentUser && currentUser.role === 'CUSTOMER' && <CustomerNavBar />}
          
      </div>
    </div>
  )
}

export default NavBar
