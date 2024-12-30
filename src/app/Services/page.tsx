import React from "react";
import Card from "../components/Card";
import {allservices} from "../data/services"
import { title } from "process";

function page() {
  return (
    <>
      <div className="">
        {/* <div className="pt-28  bg-[#10375C] sm:flex sm:flex-row flex-col  gap-3 px-5">
          <div className="pt-3 rounded-lg ">
            <Card />
          </div>
          <div className="pt-3 rounded-lg ">
            <Card />
          </div>
          <div className="pt-3 rounded-lg ">
            <Card />
          </div>
          </div> */}
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
        
        {/* <div className="bg-[#10375C]  pt-4 sm:flex sm:flex-row flex-col gap-3 px-5">
          <div className=" pt-3 rounded-lg ">
            <Card />
          </div>
          <div className="pt-3 rounded-lg ">
            <Card />
          </div>
          <div className="pt-3 rounded-lg ">
            <Card />
          </div>

          </div> */}
          {allservices.map(items => {
            return (
              <div key={items.title} className="pt-28  bg-[#10375C] sm:flex sm:flex-row flex-col gap-3 px-5">
                <div className="pt-3 rounded-lg">
                  <Card images={items.images} title={items.title} description={items.description} />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default page;