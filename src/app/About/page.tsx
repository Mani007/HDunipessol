import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/logo/logo-removebg-preview.png'
function page() {
  return (
    <>
    <div className="bg-[#10375C] w-full  2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-[#ffdc73] pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-[#ffdc73] ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <Image className="w-full h-full" src={Logo} width={0}
  height={0}
  sizes="100vw" alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-[#ffdc73] pb-4">Our Story</h1>
                    <p className="font-normal text-base leading-6 text-[#ffdc73] ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <Image className="md:block hidden" src={Logo} width={0}
  height={0}
  sizes="100vw" alt="Alexa featured Image" />
                            <Image className="md:hidden block" src={Logo} width={0}
  height={0}
  sizes="100vw" alt="Alexa featured Image" />
                            <p className="font-medium text-xl leading-5 text-[#ffdc73] mt-4">Alexa</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <Image className="md:block hidden" src={Logo} width={0}
  height={0}
  sizes="100vw" alt="Olivia featured Image" />
                            <Image className="md:hidden block" src={Logo} alt="Olivia featured Image" />
                            <p className="font-medium text-xl leading-5 text-[#ffdc73] mt-4">Olivia</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <Image className="md:block hidden" src={Logo} width={0}
  height={0}
  sizes="100vw" alt="Liam featued Image" />
                            <Image className="md:hidden block" src={Logo} alt="Liam featued Image" />
                            <p className="font-medium text-xl leading-5 text-[#ffdc73] mt-4">Liam</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <Image className="md:block hidden" src={Logo} width={0}
  height={0}
  sizes="100vw" alt="Elijah featured Image" />
                            <Image className="md:hidden block" src={Logo} width={0}
  height={0}
  sizes="100vw" alt="Elijah featured Image" />
                            <p className="font-medium text-xl leading-5 text-[#ffdc73] mt-4">Elijah</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default page