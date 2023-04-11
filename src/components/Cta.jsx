import React from 'react'
import Container from '../layout/Container'

const Cta = () => {
  return (
    <div className='bg-[#3734A9] pt-[90px] pb-[50px] mt-[100px] '>
        <Container>
          <div className='md:flex justify-between'>
          <div className='md:w-[60%] '>
            <h4 className='font-primary text-lg text-white font-extrabold'>Why Choose Us</h4>
            <h2 className='w-auto xl:w-[556px] font-primary sm:text-[30px] text-[40px] lg:text-[50px] font-bold sm:leading-[35px]  leading-[45px] lg:leading-[56px] text-white mt-6 sm:max-md:w-full'>Track your crytpo portfolio on the best way possible</h2>
            <p className='w-auto xl:w-[512px] font-primary text-md lg:text-lg font-normal text-white leading-[26px] mt-4 lg:mt-9'>End-to-end payments and financial management in a single solution. Meet the right platform to help realize. </p>
            </div>
            <div className="sm:w-full md:w-[50%] lg:w-[40%] relative flex lg:justify-end">
            <div className="sm:mt-[50px] md:mt-0">
    
              <h2 className="font-primary text-2xl text-secendary font-bold mt-7 sm:mt-0 ">
                Get Started for Free
              </h2>
              <input
                className="w-full md:w-[356px] font-primary placeholder:text-xl px-5 py-4 mt-5 block rounded-md bg-[#5C5AB8]"
                type="text"
                placeholder="Email Address"
              />
              <input
                className="w-full md:w-[356px]  font-primary placeholder:text-xl px-5 py-4 mt-6 block rounded-md bg-[#5C5AB8]"
                type="text"
                placeholder="Password"
              />
              <button className="font-primary text-base w-full md:w-[356px]  bg-[#FF7F5C] drop-shadow-xl py-4 text-center font-bold text-white mt-6  block rounded-md">
                Get Started
              </button>
            </div>
          </div>
          </div>
        </Container>
    </div>
  )
}

export default Cta