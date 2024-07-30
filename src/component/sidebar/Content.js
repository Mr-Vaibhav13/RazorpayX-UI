import React from 'react'



const Content = ({icon, text}) => {
  return (
    
    <a href='/' className='flex py-[1vh] cursor-pointer mb-[1vh] items-center'>
        <span className='text-white pl-[1vw] pr-[1vw] pt-[4px]'>{icon}</span>
        <p className='pl-[0.1vw] text-sm text-slate-300 pt-[0.2vh]'>{text}</p>
    </a>
  )
}

export default Content