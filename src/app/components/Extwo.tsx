import React from 'react'
import Image from "next/image";
import payroll from '../../../public/Experts/payroll.jpg'
function Extwo() {
  return (
    <>
    <div className='relative pt-8 px-10 mx-auto items-center justify-center bg-[#10375C] flex flex-col-reverse md:flex-row'>
        
        <div className='text-5xl text-[#ffdc73] text-center'>
            <h1>Bookkeeping & Payroll Services</h1>
        </div>
        <div className=' '>
        <Image
                    src={payroll}
                    alt="Our values"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="inline-block md:px-36 h-full w-full md:rounded-2xl object-cover"
                  />
        </div>

    </div>
    </>
  )
}

export default Extwo