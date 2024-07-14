import React from 'react'
import { FaAward } from "react-icons/fa";
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation'

const App = () => {
  return (
    <div className='mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-grey-400 from-cyan-600 to-blue-700'>
      {/* <h1 className='text-7xl font-bold text-blue-500 text-red'>Hello</h1>
      <FaAward  size={50} className='text-red-400'/> */}
    <TopButtons/>
    
    <Inputs/>

    <TimeAndLocation/>

    </div>
  )
}


export default App