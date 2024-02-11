import React from 'react'
import Container from '../Container';
import Image from 'next/image';
import nusLogo from '/public/assets/icons/nus_logo.png';
import whiteLine from '/public/assets/icons/WhiteLine46.png';


const NavBar = () => {
  return (
    <div className='sticky top-0 w-full bg-[#F07D13] z-30 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex items-center justify-between gap-2 md-gap-0'>

            {/* <Image src={nusLogo} alt='' width={97} height={35} className='justify-center object-contain'/> */}
            <Image src={nusLogo} alt='' width={97} height={35} className='justify-center object-contain' />
            <div className='flex place-items-center gap-8 md:gap-12'>
              <div className='text-white text-xl'>Log in</div>
              <Image src={whiteLine} alt={''} width={1} height={28} className='mx-2 justify-center object-contain' />
              <div className='text-white text-xl'>Sign Up</div>
            </div>
          </div>
        </Container>

      </div>
    </div>
  )
}

export default NavBar
