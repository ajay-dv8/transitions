import React from 'react'

export default function Hero() {
  return (
    <div className='relative flex flex-col justify-center w-full h-screen overflow-hidden'>
      <video
        autoPlay
        // loop
        muted
        playsInline
        className='absolute w-full h-full object-fit'
      >
        <source src="/videos/bloom.webm" type="video/webm" />
      </video>
      
      {/* Overlay to ensure text visibility */}
      {/* <div className='absolute inset-0 bg-black/10' /> */}
      
      {/* Content container */}
      <div className='relative z-10 mt-98 text-white px-4 md:px-20 flex flex-col flex-start'>
        {/* Title and sub title */}
        <span className="">
          <h1 className='text-6xl md:text-9xl mb-4 tracking-wider'>Transitions</h1>
          <p className='text-xl md:text-2xl font-light max-w-2xl'>
            Guiding you through life&apos;s most delicate transitions with grace and dignity
          </p>
        </span>

        {/* CTA Buttons */}
        <div className="my-8 flex gap-10 font-semibold mt-10">
          <button className='bg-purple-700 hover:bg-purple-500 w-fit px-8 py-3 transition-colors duration-700 ease-in-out'>
            Get Quote
          </button>
          <button className='border hover:bg-purple-500 border-purple-600 w-fit px-8 py-3 transition-colors duration-700 ease-in-out'>
            Contact
          </button>
        </div>
      </div>
    </div>
  )
}









// import React from 'react'

// export default function Hero() {
//   return (
//     <div className='flex flex-col items-center justify-center w-full h-screen bg-gradient-to-br from-[#3b3c36] to-[#002147]'>

//     </div>
//   )
// }
