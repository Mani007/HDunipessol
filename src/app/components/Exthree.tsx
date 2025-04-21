import React from 'react'
import Image from "next/image";
import bookkeeping from '../../../public/Experts/bookkeeping.jpg'
function Exthree() {
  return (
    <>
    <div className='relative pt-8 px-10 mx-auto items-center justify-center bg-[#10375C] flex flex-col md:flex-row'>
        <div className=' '>
        <Image
                    src={bookkeeping}
                    alt="Our values"
                    width={0}
              height={0}
              sizes="100vw"
                    className="inline-block md:px-36 h-full w-full md:rounded-2xl object-cover"
                  />
        </div>
        <div className='text-5xl text-[#ffdc73] text-center'>
            <h1>Financial Reporting & Analysis</h1>
        </div>

    </div>
    </>
  )
}

export default Exthree