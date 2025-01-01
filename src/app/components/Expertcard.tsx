import React from 'react'
import Image from "next/image";
import Link from "next/link";
interface Carddata{
    images: string,
    title: string,
    description: string
    //width: number
  }
function Expertcard(props: Carddata) {
  return (
    <>
    <section className="bg-[#10375C] dark:bg-gray-900">
    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <Image
        alt="Service"
        src={props.images}
        width={0}
      height={0}
      sizes="100vw"
         className="w-full "  />
        {/* <Image className="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image"/> */}
        <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#ffdc73] dark:text-white">{props.title}</h2>
            <p className="mb-6 font-light text-[#ffdc73] md:text-lg dark:text-gray-400">{props.description}</p>
            <Link href="/Contact" className="inline-flex items-center text-white bg-[#00df9a] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Contact
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Link>
        </div>
    </div>
</section>
    </>
  )
}

export default Expertcard