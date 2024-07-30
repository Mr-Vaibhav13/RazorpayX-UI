import React from 'react'
import rightStyle from "../../images/rightStyle.png"
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Boxes from './Boxes';
import { IoMdArrowRoundForward } from "react-icons/io";
import triangle from "../../images/triangle.png"



const Insights = () => {
    
  return (
    <div>
        <div className='flex justify-between'>
        <p className='text-slate-400 font-medium h-[5vh]'>Insights</p>
        
        
    <button className=' text-[#4374FF] flex text-sm'>
        Detailed insights
        <IoMdArrowRoundForward className='ml-2 mt-1' />
</button>



        </div>
        
        
        <div className='bg-[#171D26] mb-5 pt-5 h-[25vh] rounded-sm border-b-gray-600 border-b-8'>
            
            <div className='pl-5'>
            <p className='text-sm text-gray-500'><span className='font-semibold'>Payout volume</span> - last 30 days</p>
            <p className='text-gray-400 w-[21vw] mt-1 border-gray-800'>₹ 
            <span className='pl-1 text-gray-300 text-xl font-medium tracking-wide'>236,695</span>.00</p>
            </div>
            {/* <div class="w-0 mt-2 border-l-[35px] border-l-transparent 
            border-b-[85px] border-b-[#171D26] border-r-[35px] 
            border-r-transparent"></div> */}
            
            <img className='h-[8.1vw]'
            src={triangle} alt='triabgle'/>
            
            </div>
        

        <div className='bg-[#171D26] pt-5 pl-5 h-[99vh] rounded-sm mb-4'>

            <div className='flex justify-between mt-5'>

                

                <div className='flex space-x-1'>
                <p className='pl-1 text-gray-300 text-lg font-medium tracking-wide'>Activity Feed</p>
                <span className='pl-5 pt-2'><IoIosInformationCircleOutline className='text-gray-500'/></span>
                <p className='text-gray-500 pt-1 font-medium text-sm'>Updated a few seconds ago</p>
                </div>

                <div className='flex pr-10 space-x-3'>
                    <p className='text-[#4374FF] font-semibold'>Show filters</p>
                    <IoIosArrowDown className='text-[#4374FF] font-semibold mt-1' />
                </div>
            
            </div>

            <div className='flex justify-between'>
            <div>

               <Boxes />
            
            </div>

            <div>
                <img className='w-[10vw] h-[88vh]'
                src={rightStyle} alt='style' />
            </div>
            </div>


        </div>


    </div>
  )
}

export default Insights