import React from 'react'
import Image from 'next/image'
import imgSrc from "../../public/images/image-hero-desktop.png";

const IndexRight = () => {
  return (
    <div className='sm:h-[100%] sm:w-[50%]  flex items-center justify-center w-[100%] h-[50%]'>
        <div className='sm:h-[80%] h-[90%] sm:w-[60%] w-[80%] block relative'>
        <Image src={imgSrc} height="80%" width="20%" layout="fill" />
        </div>
    </div>
  )
}

export default IndexRight