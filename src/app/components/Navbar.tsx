'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/logo/logo-removebg-preview.png'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
// TODO: Navbar complted from functionality but make it crisp
function Navbar() {

    const [menuIcon, setmenuIcon] = useState(false)
    const smallNav = () => { // we are toggeling the menuIcon state here
        setmenuIcon(!menuIcon)
    }

  return (
    <>
    <header className=' text-blue-500 w-full ease-in duration-300 fixed top-0 left-0 z-10'>
        <nav className='max-w-[1366px] mx-auto h-[100px] flex justify-between items-center p-4'>
            <div>
                <Link href='/' onClick={smallNav}>
                <Image src={Logo}
                alt='HR International Logo'
                width={140}
                height={40}
                className='sm:pt-8'
                />
                </Link>
               
            </div>
             {/* large screen nav */}
             {/* This nav links are hidden but after md size they will show up */}
             <ul className='hidden md:flex lg:text-[20px] uppercase text-slate-900'>
                    <li className='mr-4 lg:mr-8 text-[#ffdc73] hover:text-[#00df9a]'><Link href='/' onClick={smallNav}>Home</Link></li>
                    <li className='mr-4 lg:mr-8 text-[#ffdc73] hover:text-[#00df9a]'><Link href='/About' onClick={smallNav}>About</Link></li>
                    <li className='mr-4 lg:mr-8 text-[#ffdc73] hover:text-[#00df9a]'><Link href='/Services' onClick={smallNav}>Services</Link></li>
                    <li className='mr-4 lg:mr-8 text-[#ffdc73] hover:text-[#00df9a]'><Link href='/Expertise' onClick={smallNav}>Expertise</Link></li>
                    {/* <li className='mr-4 lg:mr-8 text-[#ffdc73] hover:text-[#00df9a]'><Link href='/Clients' onClick={smallNav}>Clients</Link></li> */}
                    {/* <li className='mr-4 lg:mr-8 text-[#ffdc73] hover:text-[#00df9a]'><Link href='/Services' onClick={smallNav}>Services</Link></li> */}
                    <li className='mr-4 lg:mr-8 text-[#ffdc73] hover:text-[#00df9a]'><Link href='/Contact' onClick={smallNav}>Contact</Link></li>
                </ul>


            {/* small screen nav */}
            {/* Onclick change the icons */}
            <div className='flex md:hidden' onClick={smallNav}>
                {menuIcon ? (<AiOutlineClose size={30} className='text-[#ffdc73] hover:text-[#00df9a]' onClick={smallNav} />):(<AiOutlineMenu size={30} className='text-[#ffdc73] hover:text-[#00df9a]' onClick={smallNav} />)}  
            </div>
            {/* Smaller screen navbar */}
            <div className={
                menuIcon ? 
                'md:hidden  absolute top-[100px] right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen ease-in duration-300 bg-[#10375C] text-slate-300'
                :
                'md:hidden  absolute top-[100px] right-0 bottom-0 left-[-100%]  flex justify-center items-center w-full h-screen ease-in duration-300 bg-[#10375C] text-slate-300 text-center'
            }>

                {/* small screen navlinks */}
                <div className='w-full'>
                    <ul className='uppercase text-2xl text-center font-bold'>
                        <li onClick={smallNav} className='py-5 hover:text-[#00df9a]'>
                            <Link href='/About'>About</Link>
                        </li>
                        <li onClick={smallNav} className='py-5 hover:text-[#00df9a]'>

                            <Link href='/Services'>Services</Link>
                        </li>
                        <li onClick={smallNav} className='py-5 hover:text-[#00df9a]'>

                            <Link href='/Expertise'>Expertise</Link>
                        </li>
                        {/* <li onClick={smallNav} className='py-5 hover:text-[#00df9a]'>

                            <Link href='/Clients'>Clients</Link>
                        </li> */}
                        {/* <li onClick={smallNav} className='py-5 hover:text-[#00df9a]'>

                            <Link href='/Services'>Services</Link>
                        </li> */}
                        <li onClick={smallNav} className='py-5 hover:text-[#00df9a]'>
                            <Link href='/Contact'>Contact</Link>
                            
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Navbar