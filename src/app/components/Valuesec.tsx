import React from 'react'
import Image from 'next/image'
import Values from '../../../public/values.jpg'
function Valuesec() {
  return (
    <section>
      {/* Container */}
      <div className=" pt-32 bg-[#10375C]  px-4 ">
        {/* Title */}
        {/* <h2 className="mb-8 text-[#ffdc73] text-3xl font-bold md:text-5xl lg:mb-14">
        Why Choose Us
        </h2> */}
        {/* <p className="mb-8 max-w-lg text-sm text-[#ffdc73] sm:text-base lg:mb-24">
        Expertise You Can Rely On
        </p> */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <Image
            src={Values}
            alt="Our values"
            width={0}
      height={0}
      sizes="100vw"
            className="inline-block h-full w-full rounded-2xl object-cover"
          />
          <div className="flex flex-col gap-5 rounded-2xl border border-solid border-black p-10 sm:p-20">
            <h2 className="text-3xl text-[#ffdc73] font-bold md:text-5xl">Our Values</h2>
            <p className="text-sm text-[#ffdc73] sm:text-base">
            Experienced Accountants: Our certified professionals bring years of industry experience to every service we provide.
            </p>
            <p className="text-sm text-[#ffdc73] sm:text-base">
            Tailored Solutions: We understand that every business is unique, which is why we offer customized solutions to fit your specific needs.
            </p>
            <p className="text-sm text-[#ffdc73] sm:text-base">
            Clear Communication: We pride ourselves on clear, jargon-free communication. You’ll always know where your finances stand.
            </p>
            <p className="text-sm text-[#ffdc73] sm:text-base">
            Trusted & Reliable: We are committed to building long-lasting relationships based on trust and integrity.
            </p>
            <p className="text-sm text-[#ffdc73] sm:text-base">
            Proactive Approach: We don’t just react to your accounting needs – we proactively provide insights to help you grow your financial future.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Valuesec