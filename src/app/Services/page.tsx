import React from "react";
import Card from "../components/Card";

function page() {
  return (
    <>
      <div className="">
        <div className="pt-40  bg-[#10375C] flex flex-row gap-3 px-3">
          <div className=" rounded-lg ">
            <Card />
          </div>
          <div className=" rounded-lg ">
            <Card />
          </div>
          <div className=" rounded-lg ">
            <Card />
          </div>
          {/* <div className=""> 
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugiat.</p>
        </div>
        <div className="">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugiat.</p>
        </div>
        <div className="">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugiat.</p>
        </div> */}
        </div>
      </div>
    </>
  );
}

export default page;
