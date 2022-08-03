import React from 'react';
import Image from 'next/image';
import databiz from "../../public/images/client-databiz.svg";
import audiophile from "../../public/images/client-audiophile.svg";
import meet from "../../public/images/client-meet.svg";
import maker from "../../public/images/client-maker.svg";

const IndexLeft = () => {
  return (
    <div className='h-[100%] w-[50%] flex items-center justify-center'>
        <div className='h-[90%] w-[80%]'>
            <div className='mt-10'>
                <h1 className='text-5xl font-[700]'>Make</h1>
                <h1 className='text-5xl font-[700]'>remote work</h1>
            </div>
            <div className='mt-10 w-[80%] text-md font-[500] text-start text-[#5b5858]'>
                <p>Get your team in sync ,no matter your location.Streamline processes,create team rituals,and watch productivity soar.</p>
                <div className='h-[6vh] w-[30%] bg-black text-white mt-5 rounded flex items-center justify-center cursor-pointer'>Learn more</div>
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