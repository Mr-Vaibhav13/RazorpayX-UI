import React from 'react'
import Navbar from './main/Navbar'
import Amount from './main/Amount'
import Updates from './main/Updates'
import Insights from './main/Insights'

const Main = () => {
  return (
    <div>
    <Navbar />
    
    <div className='w-[55vw] m-auto'>
    <Amount />
    <Updates />
    <Insights />
    </div>
    </div>
  )
}

export default Main