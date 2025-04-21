import React from 'react'
import Link from "next/link";

function Maincontact() {
  return (
    <>
    <section className="text-[#ffdc73] bg-[#10375C] body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-6xl text-4xl font-medium title-font mb-4 text-[#ffdc73]">GET IN TOUCH</h1>
      <p className="lg:w-2/3 mx-auto text-2xl leading-relaxed ">We are always ready for exploring endless possibility for your business expansion.</p>
      <Link href="/Contact" className='flex items-center justify-center'>
              <button className="mt-4 text-white  hover:bg-[#ffdc73] border-0 py-2 px-6 focus:outline-none bg-[#00df9a] rounded text-lg">Contact</button>
            </Link>

    </div>
    
  </div>
</section>
    </>
  )
}

export default Maincontact