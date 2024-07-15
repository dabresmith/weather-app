import React from 'react'
import { FaThermometerEmpty } from "react-icons/fa";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { BiSolidDropletHalf } from 'react-icons/bi';
import { FiWind } from 'react-icons/fi';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

const TempAndDetails = () => {

    const verticalDetails = [
        {
            id:1,
            Icon: FaThermometerEmpty,
            title: "Real Feel",
            value: "22"
        },
        {
            id:2,
            Icon: BiSolidDropletHalf,
            title: "Humidity",
            value: "21"
        },
        {
            id:3,
            Icon: FiWind,
            title: "Wind",
            value: "20"
        },
    ]


    const horizontalDetails = [
        {
            id:1,
            Icon: GiSunrise,
            title: "Sunrise",
            value: "05:30 AM"
        },
        {
            id:2,
            Icon: GiSunset,
            title: "Sunset",
            value: "08:00 PM"
        },
        {
            id:3,
            Icon: MdKeyboardArrowUp,
            title: "High",
            value: "35"
        },
        {
            id:4,
            Icon: MdKeyboardArrowDown,
            title: "Low",
            value: "20"
        },
    ]

  return (
    <div>

    <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
    <p>Rain</p>
    </div>

    <div className='flex flex-row items-center justify-between py-3'>
    <img src="http://openweathermap.org/img/wn/01d@2x.png"
    alt="weather icon" 
    className='w-20' />

    <p className='text-5xl'>34c</p>

    <div className='flex flex-col space-y-3 items-start'>

    {
verticalDetails.map((vdetail) => {
          return <div key={vdetail.id} className='flex font-light text-sm items-center justify-center'>
          <vdetail.Icon size={20} className='mr-1'/>
          {`${vdetail.title}`}: <span className='font-medium ml-1'>{`${vdetail.value}`}</span>
  
      </div>
        })
}

    
    </div>
    </div>

    <div className='flex flex-row items-center justify-center space-x-10 text-sm py-3'>

{
horizontalDetails.map((hdetail) => {
          return <div key={hdetail.id} className='flex font-light text-sm items-center justify-center'>
          <hdetail.Icon size={20} className='mr-1'/>
          {`${hdetail.title}`}: <span className='font-medium ml-1'>{`${hdetail.value}`}</span>
  
      </div>
        })
}

        

        </div>

    </div>



    
  )
}

export default TempAndDetails