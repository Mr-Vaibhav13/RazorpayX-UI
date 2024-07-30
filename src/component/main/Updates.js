import React from 'react'
import updates1 from "../../images/updates1.png"
import { FaArrowRight } from "react-icons/fa6";
import check from '../../images/check.png'
import zoho from "../../images/zoho1.png"
import slash from "../../images/slash.png"
import { RxCross2 } from "react-icons/rx";



const Updates = () => {
  return (
    <div>
        <p className='font-bold text-slate-200 pb-2'>Onboarding updates 
            <span className='text-slate-600 text-[14px] pl-[0.1vw]'> (1)</span></p>
    
    
        <div className='bg-[#171D26] rounded-lg flex'>
            <img className=' w-[8.5vw]' 
            src={updates1} alt='currentAccount'/>

            <div className='flex-col py-5 pl-3'>
                <h3 className='text-slate-100 text-2xl font-medium pb-1'>Open your RazorpayX account.</h3>
                <p className='text-slate-500 h-[6vh] text-sm'>
                    Don't let bankache come in your growth. Apply for your RazorpayX account with a few basic details</p>
                <div className='flex pb-3'>
        
                    <div className='border-2 border-green-600 w-[5vw] rounded-l-lg' />
                    <div className='border-2 border-slate-600 w-[5vw] rounded-r-lg' />
                    
                    <div className='border-2 border-slate-600 w-[11vw] rounded-lg ml-1' />
                    <div className='border-2 border-slate-600 w-[11vw] rounded-lg ml-1' />
                    <div className='border-2 border-slate-600 w-[11vw] rounded-lg ml-1' />
                </div>

                <div className='flex justify-between'>
                <button className='flex bg-[#4374FF] py-2 px-5 text-white rounded-md '>
                    Start application 
                    <span className='pt-[3px] my-auto pl-[0.5vw]'><FaArrowRight /></span>
                    </button>
                <p className='text-slate-500 font-semibold'>0/4</p>
                </div>
            </div>
        </div>



        <div className='mt-[4vh] pb-12 flex bg-[#171D26] border-t-green-800 border-t-4'>
        
        <div className='w-[20vw]'>
        <h1 className='text-xl font-semibold text-slate-100 px-[2vw] py-[3vh] w-[18vw]'>Amazon Instant <div className='mt-1'>Settlemets</div></h1>
        </div>

        <div className='flex pt-[4vh]'>
            <p className='border-4 mt-1 border-purple-900 bg-blue-500 w-5 h-5 rounded-full' />

            <div className='pl-[1vw]'>
                <p className='text-sm text-slate-300'>Let's get you started</p>
                <p className='text-slate-300 text-sm'>Complete your application and get instant access to your Amazon payouts</p>
                <button className='font-semibold mt-[1vh] bg-[#4374FF] py-2 px-5 text-white rounded-md'>APPLY NOW</button>
            </div>
        </div>
        </div>


        <div className='flex bg-[#171D26] border-t-green-800 border-t-4'>
        
        <div className='w-[20vw]'>
        <h1 className='text-xl font-semibold text-slate-100 px-[2vw] py-[3vh] w-[18vw]'>Creating payouts<div className='mt-1'>in Live mode</div></h1>
        </div>

        <div className='flex pb-5 pt-[2vh]'>

            <div className='pt-1'>
            <img className='w-5 h-5' 
            src={check} alt='logo'/>
            <p className='border-4 mt-5 border-purple-900 bg-blue-500 w-5 h-5 rounded-full' />
            </div>

            <div className='pl-[1vw]'>

                <p className='border-b-2 border-b-gray-500 pb-1 text-gray-400'>
                <span className='font-bold text-lg'>Add balance </span>
                to create payouts in Live mode</p>

                <p className='text-slate-300 font-bold text-lg pt-1'>Create payout</p>
                <p className='text-slate-300 text-sm'>There are multiple ways in which you can create the first payout:</p>
                <div className='space-x-3'>
                <button className='font-semibold mt-[1vh] text-sm bg-[#4374FF] py-1 px-3 text-slate-300 rounded-sm'>MAKE A PAYOUT</button>
                <button className='font-semibold mt-[1vh] text-sm bg-gray-600 py-1 px-3 text-white rounded-sm'>SHOW APPS FOR ME</button>
                <button className='font-semibold mt-[1vh] text-sm bg-gray-600 py-1 px-3 text-white rounded-sm'>API PAYOUTS</button>
                </div>
            </div>
        </div>
        </div>

        <div className='flex mt-6 border-[1px] border-[#4374FF] bg-[#171D26] mb-10'>
           
           <img className='w-[18vw]' 
           src={zoho} alt='zoho' />

           <div className='w-[23vw] m-auto'>
            <p className='text-slate-300'> 
            <img className='inline mb-1 h-[4vh]' src={slash} alt='slash'/>
            Automate Bookkeeping For Payouts</p>
            <p className='text-gray-500 text-xs leading-5'>Close your books 60% faster and with better accuracy by automating bookkeeping for your Payouts.</p>
           </div>

           <div>
           <button className='flex py-2 px-2 border-[#4374FF] border-2 mt-9 text-[#4374FF] rounded-sm text-xs mr-[2vw]'>
                    Connect Zoho Books 
                    <span className='pt-[0.1vw] pl-[0.5vw]'><FaArrowRight /></span>
            </button>
           </div>
           
           <RxCross2 className='text-slate-400 mt-1 mr-1'/>


        </div>


    </div>
  )
}

export default Updates