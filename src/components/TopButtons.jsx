import React from 'react'

const TopButtons = () => {

const cities = [

  {
    id:1,
    name: 'London'
  },
  {
    id:2,
    name: 'Sydney'
  },
  {
    id:3,
    name: 'Toronto'
  },
  {
    id:4,
    name: 'New york'
  },
  {
    id:5,
    name: 'Paris'
  }

]

  return (
    <div className='flex items-center justify-around my-6'>
      {
        // cities.map(city =>(<button key={city.id} className='text-lg font-medium hover:bg-gray-700/20 px-3 py-2
        //   rounded-md transition ease-in'>{city.name}</button>))

        cities.map((city) => {
          return <button key={city.id} className='text-lg font-medium hover:bg-gray-700/20 px-3 py-2
           rounded-md transition ease-in'>{city.name}</button>
          // console.log(city)
        })
      }
        
        
        
    </div>
  )
}

export default TopButtons