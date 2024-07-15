import React from 'react'

const Forecast = () => {   

    const data = [
        {
            id:1,
            value:1,
        },
        {
            id:2,
            value:2,
        },
        {
            id:3,
            value:3,
        },
        {
            id:4,
            value:4,
        },
        {
            id:5,
            value:5,
        },
    ];

    // const data = [1,2,3,4,5]

  return (
    <div>
        <div className='flex items-center justify-start mt-6'>
        <p className='font-medium uppercase'>3 hour step forecast</p>
        </div>
        <hr className='my-1'/>

        <div className='flex items-center justify-between'>

{/* {
data.map((d) => {
          return 
          <div key={d.id} className='flex flex-col item-center justify-center'>
            <p>Wed</p>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" 
            alt="weather icon"
            className='w-12 my-1' />
            <p className='font-medium'>12C</p>
          </div>
        })
} */}

{
    data.map((data,index) => (
        <div 
        key={index} 
        className='flex flex-col items-center justify-center'
    >
        <p className='font-light text-sm'>Wed</p>
        <img src="http://openweathermap.org/img/wn/01d@2x.png" 
            alt="weather icon"
            className='w-12 my-1' 
            />
            <p className='font-medium'>12C</p>
            </div>
    ))
}

{/* {
    data.map((data,index) => {
        return
        <div 
        key={index} 
        className='flex flex-col items-center justify-center'
    >
        <p className='font-light text-sm'>Wed</p>
        <img src="http://openweathermap.org/img/wn/01d@2x.png" 
            alt="weather icon"
            className='w-12 my-1' 
            />
            <p className='font-medium'>12C</p>
            </div>
})
} */}

        </div>
    </div>
  )
}

export default Forecast;