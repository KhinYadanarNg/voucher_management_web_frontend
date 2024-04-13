'use client'
import React from 'react'
import Container from '../Container';
import SubNavItem from './SubNavItem';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const MerchantNavBar = () => {

  const pathname = usePathname();

  const basePath = '/components/merchant/campaigns/campaignsList';

  console.log("Checking the basePath after overwrite : ", basePath);

  return (
    <div className='top-0 w-full bg-[#F07D13] z-30 shadow-none'>
      <Container>
        <div className='flex flex-row items-center justify-between md:justify-start overflow-auto flex-nowrap gap-2 md-gap-12'>
          <Link href='/components/merchant/campaigns/campaignsList?page=1'>
            {
              pathname ? (
                <SubNavItem
                  label={'Campaign List'}
                  selected={pathname === '/' || pathname.startsWith('/components/campaigns/campaignsByStoreIdName') || pathname === basePath}
                />
              ) :
                <SubNavItem label={'Campaign List'} selected={basePath === '/components/merchant/campaigns/campaignsList'} />
            }

          </Link>

          <Link href='/components/merchant/campaigns/createCampaign'>
            <SubNavItem label={'Create Campaign'} selected={pathname === '/components/merchant/campaigns/createCampaign'} />
          </Link>

          <Link href='/components/merchant/stores?page=1'>
            <SubNavItem label={'My Stores'} selected={(pathname === '/components/merchant/stores') || (pathname?.startsWith('/components/merchant/stores/detail'))} />
          </Link>

          <Link href='/components/merchant/stores/createStore'>
            <SubNavItem label={'Create Store'} selected={pathname === '/components/merchant/stores/createStore'} />
          </Link>
        </div>
      </Container>

    </div>
  )
}

export default MerchantNavBar
