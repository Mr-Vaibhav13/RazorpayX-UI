import React from 'react'
import SideBar from './SideBar'
import Main from './Main'


const App = () => {
  return (
    <div className='flex'>
      <SideBar />
      <Main />
    </div>
  )
}

export default App