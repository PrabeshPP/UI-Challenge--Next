import React from 'react'
import Image from 'next/image'
import menuImage from "../../public/images/icon-menu.svg";

const MainNavigation = () => {
  return (
    <div className='h-[10vh] w-[100%] sm:flex-row flex justify-between sticky top-0 z-20 bg-white'>
        <div className='h-[100%] sm:w-[45%] w-[100%] flex flex-row justify-between'>
            <div className='h-[100%] w-[40%] sm:justify-center pl-3 items-center flex'>
              <h1 className='text-2xl font-epilogue font-bold'>snap</h1>
            </div>
            <div className='h-[100%] w-[30%] flex justify-center items-center sm:hidden'>
              <Image src={menuImage} />
            </div>
            <div className='sm:h-[100%] sm:w-[80%] hidden sm:block'>
                <ul className='h-[100%] w-[80%] flex flex-row items-center justify-around'>
                    <li className='cursor-pointer'>Fetaures</li>
                    <li className='cursor-pointer'>Company</li>
                    <li className='cursor-pointer'>Careers</li>
                    <li className='cursor-pointer'>About</li>
                </ul>
            </div>
        </div>
        <div className='sm:h-[100%] sm:w-[20%] sm:flex sm:flex-row sm:items-center sm:justify-around hidden'>
              <span className='cursor-pointer'>Login</span>
              <div className='border-[1px] border-[#383636] rounded-md h-[50%] w-[30%] flex items-center justify-center cursor-pointer'>Register</div>
        </div>
    </div>
  )
}

export default MainNavigation