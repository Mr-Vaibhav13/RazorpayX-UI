import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiSpeakerSimpleHighLight } from "react-icons/pi";



const Navbar = () => {
  return (
    <div className='h-[10vh] m-2 flex justify-end space-x-4 pr-7'>
      
      <button className='text-white h-[37px] font-semibold bg-[#4374FF]
      px-[1vw] py-2 flex'>
      <div className='border-r-2 text-sm pr-3 border-gray-500'>+ PAYOUT </div>
      <MdKeyboardArrowDown className='ml-2 mt-[2px]'/>
      </button>


      
      <div className='flex space-x-4 h-[40px] items-center'>
      <IoIosSearch className='text-blue-400 text-xl'/>
      
      <PiSpeakerSimpleHighLight className='text-orange-500 text-xl' />
      
      <MdOutlinePersonAddAlt className='text-blue-400 text-xl'/>
      </div>
      
    </div>
  )
}

export default Navbar