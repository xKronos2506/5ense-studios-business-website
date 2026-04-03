import React from 'react'
import img1 from '../../../assets/images/Team/danielle-frontside.jpg'

const Game = () => {
  return (
    <div className='min-h-screen bg-[#1F1F21] flex items-center justify-center px-6'>
      
      <div className='w-full max-w-5xl flex flex-col items-center text-center'>
        
        <h1 className='text-3xl md:text-5xl text-white font-bold mb-10'>
          Ready to take on the case?
        </h1>

        <div className='bg-black rounded-3xl p-6 md:p-12 w-full flex flex-col md:flex-row gap-12 justify-center items-center'>
          
          {/* Card 1 */}
          <div className='flex flex-col items-center text-center flex-1'>
            <img 
              src={img1} 
              alt="" 
              className='w-60 h-60 object-cover bg-gray-500 mb-6 rounded-xl'
            />
            <p className='text-white mb-4'>
              Try out the demo and get a taste of the narrative and characters! 
              Who knows, you might just want the entire version.
            </p>
            <button className="bg-green-600 px-6 py-2 rounded-full text-white text-sm font-medium 
              hover:bg-green-500 transition duration-300">
              Try The Demo
            </button>
          </div>

          {/* Card 2 */}
          <div className='flex flex-col items-center text-center flex-1'>
            <img 
              src={img1} 
              alt="" 
              className='w-60 h-60 object-cover bg-gray-500 mb-6 rounded-xl'
            />
            <p className='text-white mb-4'>
              Try out the demo and get a taste of the narrative and characters! 
              Who knows, you might just want the entire version.
            </p>
            <button className=" bg-green-600 px-6 py-2 rounded-full  text-white  text-sm font-medium 
              hover:bg-green-500 transition duration-300">
              Try The Demo
            </button>
          </div>

        </div>

        <h3 className='text-2xl md:text-4xl text-white font-light mt-10 text-center'>
          More downloadable content to come in the future...
        </h3>

      </div>
    </div>
  )
}

export default Game