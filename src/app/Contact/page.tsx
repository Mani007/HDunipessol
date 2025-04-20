import React from 'react'
import Map from '../components/Map'

function page() {
  return (
   <>
   <div className="w-full relative text-gray-700 bg-[#10375C]  body-font">
    <div className="container  flex flex-col bg-[#10375C] flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
      
      <div className="flex lg:flex-row ">
        <p className='text-6xl bg-red-500'>Some text</p>
      </div>
      <div className="flex-shrink-0 w-0 mx-auto ">
      <Map/>
      </div>
    </div>
   </div>
   </>
  )
}

export default page