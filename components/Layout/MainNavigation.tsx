import React from 'react'

const MainNavigation = () => {
  return (
    <div className='h-[10vh] w-[100%] sm:flex-row flex justify-between'>
        <div className='h-[100%] w-[45%] flex flex-row'>
            <div className='h-[100%] w-[20%] justify-center items-center flex'>
              <h1 className='text-2xl font-epilogue font-bold'>snap</h1>
            </div>
            <div className='h-[100%] w-[80%]'>
                <ul className='h-[100%] w-[80%] flex flex-row items-center justify-around'>
                    <li className='cursor-pointer'>Fetaures</li>
                    <li className='cursor-pointer'>Company</li>
                    <li className='cursor-pointer'>Careers</li>
                    <li className='cursor-pointer'>About</li>
                </ul>
            </div>
        </div>
        <div className='h-[100%] w-[20%] flex flex-row items-center justify-around'>
              <span className='cursor-pointer'>Login</span>
              <div className='border-2 border-black rounded-md h-[50%] w-[30%] flex items-center justify-center cursor-pointer'>Register</div>
        </div>
    </div>
  )
}

export default MainNavigation