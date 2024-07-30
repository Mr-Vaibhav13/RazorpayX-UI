import React from 'react'
import logo from "../../images/logo.jpg"
import { TfiReload } from "react-icons/tfi";


const Amount = () => {
  return (
    <div className='text-white'>
    
    <div className='flex space-x-3 items-center'>
        <img className='w-[1vw] h-[2vh]' src={logo} alt="logo"/>
        <p className='text-sm text-slate-400'>RazorpayX Lite</p>
        <p className='text-slate-500 italic text-sm'>as of a few seconds ago </p>
        
        <span className='text-slate-500'><TfiReload /></span>
    </div>

    <div className='flex pb-[5vh]'>
        <p className='text-slate-300 border-r-2 w-[21vw] mt-1 border-gray-800'>₹ 
            <span className='pl-1 text-2xl font-medium tracking-wide'>100</span>.09</p>
        
        <button className='cursor-pointer pl-[1vw] text-[#4374FF] font-semibold text-sm'>+ Add balance</button>
    </div>

    <div className='p-3 mb-[3vh] border-2 text-slate-500 border-dashed border-gray-700'>
        🎉 <span className='text-[15px] font-semibold'>You're all caught up</span>. There are no more items pending on you.
    </div>

    </div>
  )
}

export default Amount