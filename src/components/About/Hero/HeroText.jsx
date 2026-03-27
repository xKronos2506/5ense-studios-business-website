import React from 'react'

const HeroText = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center px-45 gap-5 text-white '>
      <h1 className='text-8xl'>THE FRIEND</h1>

      <div className="flex gap-4">
        <button className='bg-orange-500 px-6 py-2 rounded-full text-sm hover:bg-orange-600 transition'>
          Sneak Peek
        </button>

        <button className='border border-white px-6 py-2 rounded-full text-sm hover:bg-white hover:text-black transition'>
          Learn More
        </button>
      </div>
      
    </div>
  )
}

export default HeroText