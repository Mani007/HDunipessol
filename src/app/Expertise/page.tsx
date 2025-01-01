import React from 'react'
import {allexperts1,allexperts2} from "../data/expertdata"
import Expertcard from '../components/Expertcard'
// import Rexpertcard from '../components/Rexpertcard'
function page() {
  return (
    <>
    <div className='pt-28 bg-[#10375C]'>
    {allexperts1.map(items => {
        return(
            <div key={items.title} className="pt-8  " >
            <div className=" ">
              <Expertcard images={items.images} title={items.title} description={items.description} />
            </div>
          </div>
        )
    })}
    {allexperts2.map(items => {
        return(
            <div key={items.title} className="pt-8  " >
            <div className=" ">
              <Expertcard images={items.images} title={items.title} description={items.description} />
            </div>
          </div>
        )
    })}
    </div>
    </>
  )
}

export default page