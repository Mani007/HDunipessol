import React from 'react';
import Image from "next/image";
import account from '../../../public/Experts/account.jpg'
function Exone() {
  return (
    <>
    <div className='relative px-10 mx-auto items-center justify-center bg-[#10375C] flex flex-col md:flex-row'>
        <div className=' '>
        <Image
                    src={account}
                    alt="Our values"
                    width={0}
              height={0}
              sizes="100vw"
                    className="inline-block md:px-36 h-full w-full md:rounded-2xl object-cover"
                  />
        </div>
        <div className='text-5xl text-[#ffdc73] text-center'>
            <h1>Accounting & Tax Services</h1>
        </div>

    </div>
    </>
  )
}

export default Exone