import React from 'react';
import Image from 'next/image';
import databiz from "../../public/images/client-databiz.svg";
import audiophile from "../../public/images/client-audiophile.svg";
import meet from "../../public/images/client-meet.svg";
import maker from "../../public/images/client-maker.svg";

const IndexLeft = () => {
  return (
    <div className='sm:h-[100%] sm:w-[50%] sm:flex sm:items-center sm:justify-center h-[50%] sm:pl-0'>
        <div className='h-[90%] sm:w-[80%] w-[100%]'>
            <div className='mt-10 flex sm:flex-col flex-row justify-center font-bold w-[100%]'>
                <h1 className='sm:text-5xl font-[700] text-4xl'>Make</h1>
                <h1 className='sm:text-5xl font-[700] text-4xl ml-2'>remote work</h1>
            </div>
            <div className='mt-10 sm:w-[80%] text-md font-[500] sm:text-start text-center text-[#5b5858] sm:block flex justify-center flex-col items-center'>
                <p className='w-[100%] flex items-center'>Get your team in sync ,no matter your location.Streamline processes,create team rituals,and watch productivity soar.</p>
                <div className='h-[6vh] sm:w-[30%] w-[50%] bg-black text-white mt-5 rounded-full flex items-center justify-center cursor-pointer'>Learn more</div>
            </div>
            <div className='h-[20vh] w-[100%] mt-10 flex flex-row justify-around'>
                  <div>
                    <Image src={databiz}/>
                  </div>
                  <div>
                  <Image src={audiophile}/>
                  </div>
                  <div>
                    <Image src={meet}/>
                  </div>
                  <div>
                    <Image src={maker}/>
                    </div>      
            </div>
        </div>
    </div>
  )
}

export default IndexLeft