import React from 'react'
import Link from 'next/link'
function Bgvideo() {
  return (
    <>
     <div className="container relative flex items-center justify-center flex-col">
    {/* <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
    {/* <Image
      src="/images/opscraftherosection.png"
      width={720}
      height={600}
      alt="Picture of the author"
    /> */}
    <div className='w-screen bg-[#10375C] h-dvh   '>

    <video src="hduni.mp4" autoPlay loop muted playsInline  className='md:min-w-[110%] min-w-full  min-h-full  '/>
    </div>
    <div className=" sm:text-center sm:items-center sm:justify-center text-center items-center justify-center absolute sm:w-4/5 w-screen">
    
      <h1 className="mt-20 title-font font-bold sm:text-2xl text-sm  text-[#ffdc73]"> YOUR SUCCESS OUR BUSINESS</h1>
      <p className="text-sm sm:text-xl leading-relaxed text-[#ffdc73]"> We always exceeding our excellence in your financial journey. </p>
      <div className="flex justify-center sm:justify-center">
        <Link href='/Expertise'>
        <button className=" mt-4 text-white hover:bg-[#ffdc73] border-0 py-2 px-6 focus:outline-none bg-[#00df9a] rounded text-lg">Know More</button>
        </Link>
        {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      </div>
    
    </div>
  </div>
    </>
  )
}

export default Bgvideo