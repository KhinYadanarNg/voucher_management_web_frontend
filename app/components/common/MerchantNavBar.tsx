'use client'
import React from 'react'
import Container from '../Container';
import SubNavItem from './SubNavItem';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const MerchantNavBar =  () => {

  const pathname = usePathname();

  console.log("Printing the pathname : ", pathname);

  return (
    <div className='top-0 w-full bg-[#F07D13] z-30 shadow-none'>
        <Container>
          <div className='flex flex-row items-center justify-between md:justify-start overflow-auto flex-nowrap gap-2 md-gap-12'>
            <Link href='/components/campaigns/'>
              <SubNavItem label={'Campaign List'} selected={pathname === '/components/campaigns'}/>
            </Link>

            <Link href='/components/campaigns/createCampaign'>
              <SubNavItem label={'Create Campaign'} selected={pathname === '/components/campaigns/createCampaign'}/>
            </Link>

            <Link href='/components/merchant/stores'>
            <SubNavItem label={'My Store'} selected={pathname === '/components/merchant/stores'}/>
            </Link>

            <Link href='/components/merchant/stores/createStore'>
            <SubNavItem label={'Create Store'} selected={pathname === '/components/merchant/stores/createStore'}/>
            </Link>
          </div>
        </Container>

    </div>
  )
}

export default MerchantNavBar
