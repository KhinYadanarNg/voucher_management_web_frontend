import { FaUserCircle } from "react-icons/fa";
import Image from 'next/image'
import React from 'react'

interface AvatarProps{
    src?: string | null | undefined
}

const Avatar: React.FC<AvatarProps> = ({src}) => {

    if(src){
        <Image src={src} alt='Avatar' className='rounded-full' height="30" width={30}/>
    }

  return (
    <FaUserCircle size={24}/>
  )
}

export default Avatar