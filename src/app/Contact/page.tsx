import React from 'react'
import Map from '../components/Map'

function page() {
  return (
   <>
   <div className="w-full relative text-gray-700 bg-[#10375C]  body-font">
    <div className="container flex flex-col bg-[#10375C] flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
      <div className="flex-shrink-0 w-0 mx-auto mt-8 text-center md:mx-0 md:text-left">
     <Map/>
      </div>
      
    </div>
   </div>
   </>
  )
}

export default page