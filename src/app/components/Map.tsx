"use client"
import React from 'react'
import WorldMap from "react-svg-worldmap";
const data = [
    { country: "pt", value: "PT office" },
]
function Map() {
  return (
    <>
    
    <div className="bg-[#10375C]">
    <WorldMap
        color="green" 
        value-suffix="Our Office"
        size="lg"
        data={data}
      />
    </div>
    
    </>
  )
}

export default Map