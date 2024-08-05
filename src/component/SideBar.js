import React from 'react'
import Content from './sidebar/Content';

import RazorpayX from '../images/RazorpayX.png'

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
import { FiArrowRight } from "react-icons/fi";





const SideBar = () => {
  return (
    <div className='w-[16vw] bg-[#1A212B] h-[100%] fixed'>
        
        <img className='w-[12vw] pt-2 pl-2' 
        src={RazorpayX} alt='RazorPayX logo' />

        <div className='pt-3 border-b-[0.1px] border-slate-600'>
            
            <div className='bg-[#2E353F] border-l-4 border-green-600 rounded-xl '>
            <span className='font-semibold'><Content icon={<LuHome />} text="Home"/></span>
            </div>
            
            <Content icon={<MdArrowOutward />} text="Payouts"/>
            <Content icon={<IoDocumentTextOutline />} text="Account Statement"/>
            <Content icon={<RxPerson />} text="Contacts"/>
        </div>

        <div>
            <div className='flex pt-[2vw]'>
            <Content icon={<FaIndianRupeeSign />} text="Loans"/> 
            <p className='px-[9px] h-[15px] mt-[0.8vw] ml-[0.5vw] bg-green-600 font-medium text-[11px] rounded-xl text-white'>NEW</p>
            </div>
    
            <div>
            <div className='h-[5.5vh]'>
                <Content icon={<TbInvoice />} text="Vendor Payments"/>
            </div>
            
            <div className='flex pl-[2.5vw] mb-[2vh] pt-1'>
            <p className='px-[9px] mt-[1px] h-[15px] font-medium bg-green-600 text-[11px] rounded-xl text-white'>NEW</p>
            <p className='text-[#4374FF] text-sm pl-1 font-medium'>Invoice Approvals 
            </p>
            <span className='text-[#4374FF] pt-[0.1vw] pl-1'><FiArrowRight /></span>
            </div>
            </div>
        </div>

        <div>
            <Content icon={<LuStamp />} text="Tax Payments"/>
            <Content icon={<CiLocationArrow1 />} text="Payout Links"/>
            <Content icon={<BsEnvelopePaper />} text="Payroll"/>
            <Content icon={<PiBookBookmark />} text="Reports"/>
            
        </div>

    </div>
  )
}

export default SideBar