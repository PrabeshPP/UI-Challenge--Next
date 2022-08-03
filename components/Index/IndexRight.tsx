import React from 'react'
import Image from 'next/image'
import imgSrc from "../../public/images/image-hero-desktop.png";

const IndexRight = () => {
  return (
    <div className='h-[100%] w-[50%]  flex items-center justify-center'>
        <div className='h-[80%] w-[80%] block relative'>
        <Image src={imgSrc} height="80%" width="20%" layout="fill" />
        </div>
    </div>
  )
}

export default IndexRight