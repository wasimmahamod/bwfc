import React from 'react'
import Container from '../layout/Container'
import { BsPlayFill } from 'react-icons/bs'

const Banner = () => {
    return (
        <div className='relative'>
            <Container>
                <div className='lg:flex '>
                    <div className='w-full lg:w-[45%]'>
                        <div className='mt-[120px] lg:mt-[230px] '>
                            <h2 className='font-primary text-[45px] xl:text-[60px] font-extrabold text-primary leading-[55px] xl:leading-[80px] w-auto lg:w-[520px] xl:w-[664px]'>Managing business payments has never been easier</h2>
                            <p className='font-primary text-xl font-normal text-primary leading-[30px] w-auto lg:w-[465px] mt-4'>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                            <div className='mt-6  sm:flex gap-x-12 relative z-50'>
                                <button className='font-primary text-white font-bold bg-secendary py-2 lg:py-4 px-5 lg:px-9 rounded-[47px] drop-shadow-lg'>Get Started</button>
                                <div className='flex items-center lg:justify-center gap-x-3 mt-5 sm:mt-0'>
                                    <div className='lg:w-[60px] lg:h-[60px] w-[40px] h-[40px] rounded-full bg-[#22D497] flex justify-center items-center '><BsPlayFill className='text-white text-2xl' /></div>
                                    <span className='font-primary text-secendary text-base font-semibold'>See How It Works</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-[55%] flex justify-center lg:justify-end'>
                        <img className='mt-10 lg:mt-[158px] xl:mr-[-90px]  ' src="img/banner.png" alt="" />
                    </div>
                </div>
            </Container>
            <img className='hidden lg:block absolute top-0 left-0 ' src="img/bannershape1.png" alt="bannershape" />
            <img className='hidden lg:block absolute bottom-0 left-0 ' src="img/bannershape.png" alt="bannershape" />
        </div>
    )
}

export default Banner