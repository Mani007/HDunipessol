import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Service1 from "../../../public/Services/services1.jpg";
function Card() {
  return (
    <>
    <div className="relative  rounded-lg  shadow transition hover:shadow-lg">
  <Image
    alt="Service"
    src={Service1}
    width={0}
  height={0}
  sizes="100vw"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="relative flex flex-col items-center justify-center  pt-32 sm:pt-48 lg:pt-64">
    <div className="p-4  items-center justify-center sm:p-6">
      

     <h2 className='text-[#ffdc73] text-center '>Accounting</h2>

      <p className="mt-2 line-clamp-3 text-center text-sm/relaxed text-[#ffdc73] ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
        pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
        quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
        atque dignissimos. Molestias explicabo corporis voluptatem?
      </p>

      <Link href="/Contact" className='flex items-center justify-center'>
        <button className="mt-4 text-white  hover:bg-[#ffdc73] border-0 py-2 px-6 focus:outline-none bg-[#00df9a] rounded text-lg">Contact</button>
      </Link>
    </div>
  </div>
</div>
    </>
  )
}

export default Card