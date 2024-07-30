import React from 'react'
import { RxPerson } from 'react-icons/rx';
import logo from "../../images/logo.jpg"
import { IoMdArrowDown } from "react-icons/io";


const Boxes = () => {
  return (
    <div>
        
        <div className='pl-[5vw] mt-[8vh]'>
       <div className='p-5 h-[15vh] bg-gradient-to-r flex from-[#2e3e5c] w-[35vw]'>
        <div className='border-r-2 pl-16 m-2 w-[10vw] border-r-gray-600 my-auto'>
            
            <p className='text-slate-200 font-bold'>23 JUL</p>
            <p className='text-slate-500 font-semibold text-sm'>Tuesday</p>
            
        </div>

        <div className='pl-12 flex items-center'>
            <span className='m-1 w-[2vw]'><RxPerson className='p-[1px] text-white bg-[#2e3e5c] '/></span>
            <p className='text-slate-400 text-sm'><span className='text-slate-100 font-medium'>1</span> contact created</p>
        </div>


       </div>
    </div>

    {/* ---------------------------------------- */}


    <div className='pl-[5vw] mt-[4vh]'>
       <div className='p-5 h-[15vh] bg-gradient-to-r flex from-[#2e3e5c] w-[35vw]'>
        <div className='border-r-2 pl-16 border-r-gray-600 m-2 w-[10vw] my-auto'>
            
            <p className='text-slate-200 font-bold'>9 JUL</p>
            <p className='text-slate-500 font-semibold text-sm'>Tuesday</p>
            
        </div>

        <div className='pl-12 flex items-center'>
            <span className='m-1 w-[1.5vw]'><img src={logo} alt='logo' className='p-[1px] text-white bg-[#2e3e5c] '/></span>
            <p className='text-slate-400 mt-1 ml-2 text-sm'>₹<span className='text-slate-100 font-medium'>300</span> <span className='text-xs'>.00 </span>credited into the account</p>
        </div>


       </div>
    </div>


    {/* ----------------------------------------------- */}


    <div className='pl-[5vw] mt-[4vh]'>
       <div className='p-5 h-[15vh] bg-gradient-to-r flex from-[#2e3e5c] w-[35vw]'>
        <div className='border-r-2 pl-16 border-r-gray-600 m-2 w-[10vw] my-auto'>
            
            <p className='text-slate-200 font-bold'>1 JUL</p>
            <p className='text-slate-500 font-semibold text-sm'>Monday</p>
            
        </div>

        <div className='pl-12 flex items-center'>
        <span className='m-1 w-[1.5vw]'><img src={logo} alt='logo' className='p-[1px] text-white bg-[#2e3e5c] '/></span>
        <p className='text-slate-400 mt-1 ml-2 text-sm'><span className='text-slate-100'> 1 </span>payout worth ₹<span className='text-slate-100 font-medium text-base'>2,36,695</span><span className='text-xs'>.00 </span>created</p>
        </div>


       </div>
    </div>


    {/* --------------------------------- */}

    <div className='pl-[5vw] mt-[4vh]'>
       <div className='p-5 h-[15vh] bg-gradient-to-r flex from-[#2e3e5c] w-[35vw]'>
        <div className='border-r-2 border-r-gray-600 pl-16 m-2 w-[10vw] my-auto'>
            
            <p className='text-slate-200 font-bold'>24 JUN</p>
            <p className='text-slate-500 font-semibold text-sm'>Monday</p>
            
        </div>

        <div className='pl-12 flex items-center'>
        <span className='m-1 w-[1.5vw]'><img src={logo} alt='logo' className='p-[1px] text-white bg-[#2e3e5c] '/></span>
            </div>


       </div>
    </div>

     
    <div className='flex w-[48vw] mt-6 justify-center'> 
    <button className=' flex font-bold mt-[1vh] text-sm bg-gray-600 py-2 px-3 text-slate-300 rounded-sm'>
        LOOK FOR OLDER ACTIVITIES 
        <IoMdArrowDown className='ml-2 my-auto' />
</button>
    </div>


    

    
    </div>
  )
}

export default Boxes