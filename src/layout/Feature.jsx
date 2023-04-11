import React from 'react'

const Feature = ({dbtn,title}) => {
    return (
        <div>
            <h4 className='font-primary text-lg text-secendary font-extrabold'>Our Feature</h4>
            <h2 className='w-auto xl:w-[556px] font-primary sm:text-[30px] text-[40px] lg:text-[50px] font-bold sm:leading-[35px]  leading-[45px] lg:leading-[56px] text-primary mt-6 sm:max-md:w-full'>{title}</h2>
            <p className='w-auto xl:w-[512px] font-primary text-md lg:text-lg font-normal text-[#757095] leading-[26px] mt-4 lg:mt-9'>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
            {dbtn&&
            <button className='font-primary text-base bg-secendary font-bold leading-[30px] sm:py-4 py-2 px-5 sm:px-9 rounded-[7px]  text-white mt-4 lg:mt-[27px] drop-shadow-xl'>Get Started</button>
            }
        </div>
    )
}

export default Feature