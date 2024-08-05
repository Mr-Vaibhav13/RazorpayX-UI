import React, { useState } from 'react'
import logo from "../images/logo.jpg"

import { LuHome } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RxPerson } from "react-icons/rx";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { TbInvoice } from "react-icons/tb";
import { LuStamp } from "react-icons/lu";
import { CiLocationArrow1 } from "react-icons/ci";
import { BsEnvelopePaper } from "react-icons/bs";
import { PiBookBookmark } from "react-icons/pi";



const Hide = () => {
  return (
    <div
    className='w-[4vw] bg-[#1A212B] pb-10 h-[100%] fixed'>
        <img className='w-10 m-auto py-4 pb-10'
        src={logo} alt='sd' />
    
    <div className='flex space-y-6 flex-col items-center'>
    <LuHome className='text-white text-2xl'/>
    < MdArrowOutward className='text-white text-2xl'/>
    < IoDocumentTextOutline className='text-white text-2xl'/>
    < RxPerson className='text-white text-2xl'/>
    < FaIndianRupeeSign className='text-white text-2xl'/>
    < TbInvoice className='text-white text-2xl'/>
    < LuStamp className='text-white text-2xl'/>
    < CiLocationArrow1 className='text-white text-2xl'/>
    < BsEnvelopePaper className='text-white text-2xl'/>
    < PiBookBookmark className='text-white text-2xl'/>
    </div>
    


    </div>
  )
}

export default Hide