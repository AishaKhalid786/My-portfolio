import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'


const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-left lg:bg-[15%] bg-cover'
    style={{backgroundSize: "35%"}}
    >
      <Image
  src="/banner-bg.jpg"
  alt="My Profile"
  width={300}
  height={300}
/>

      
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p>I&apos m</p>
            <p>Aisha</p>
            <p>Khalid</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero
