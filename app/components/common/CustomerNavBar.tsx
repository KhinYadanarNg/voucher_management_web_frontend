'use client'
import React from 'react'
import Container from '../Container';
import SubNavItem from './SubNavItem';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const CustomerNavBar =  () => {

  const pathname = usePathname();

  console.log("Printing the pathname : ", pathname);

  return (
    <div className='top-0 w-full bg-[#F07D13] z-30 shadow-none'>
        <Container>
          <div className='flex flex-row items-center justify-between md:justify-start overflow-auto flex-nowrap gap-2 md-gap-12'>
            <Link href='/components/campaigns/'>
              <SubNavItem label={'Campaigns'} selected={pathname === '/components/campaigns'}/>
            </Link>

            <Link href='/components/merchant/stores'>
            <SubNavItem label={'Stores'} selected={pathname === '/components/merchant/stores'}/>
            </Link>
            
          </div>
        </Container>

    </div>
  )
}

export default CustomerNavBar