import React from 'react'
import Container from '../Container';
import Image from 'next/image';
import nusLogo from '/public/assets/icons/nus_logo.png';


const NavBar = () => {
  return (
    <div className='sticky top-0 w-full bg-[#F07D13] z-30 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex items-center justify-between gap-2 md-gap-0'>

            {/* <Image src={nusLogo} alt='' width={97} height={35} className='justify-center object-contain'/> */}
            <Image src={nusLogo} alt='' width={97} height={35} className='justify-center object-contain' />
            <div className='flex place-items-center gap-2 md:gap-4'>
              <div className='text-white text-xl'>Log in</div>
              <div className='h-full text-white text-2xl'>|</div>
              <div className='text-white text-xl'>Sign Up</div>
            </div>
          </div>
        </Container>

      </div>
    </div>
  )
}

export default NavBar
