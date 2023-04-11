import React, { useEffect, useState } from 'react'
import Container from '../layout/Container'
import {BsChevronDown} from 'react-icons/bs'
import {GoThreeBars} from 'react-icons/go'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    let [navShow,setNavshow]=useState(true)

    let handleNavShow=()=>{
        setNavshow(!navShow)
    }

    useEffect(()=>{
        function scrollWidth(){
            if(window.innerWidth<1024){
                setNavshow(false)
            }else{
                setNavshow(true)
            }
        }
        scrollWidth()
        window.addEventListener('resize',scrollWidth())

    },[])
  return (
   <nav className='  bg-[#FFFFFF] absolute top-7 left-0 w-full z-50'>
    <Container>
        <div className='lg:flex items-center'>
            <div className='w-[20%]'>
                <img src="img/logo.png" alt="" />
            </div>
            <div className='w-[80%] lg:flex justify-between items-center mt-5 lg:mt-0'>
                {navShow?
                <AiOutlineClose onClick={handleNavShow} className='absolute top-0 right-5  lg:hidden text-xl'/>
                :
                <GoThreeBars onClick={handleNavShow} className='absolute top-0 right-5  lg:hidden text-xl'/>
                }
                {
                    navShow&&
                <div className='lg:flex justify-between items-center w-full py-4'>
                <div className='lg:w-[65%] lg:flex justify-center'>
                    <ul className='lg:flex gap-x-7'>
                        <li className='font-primary text-primary text-sm font-normal hover:text-secendary flex items-center gap-3 mt-3 lg:mt-0'>Product <BsChevronDown className='hidden lg:block'/></li>
                        <li className='font-primary text-primary text-sm font-normal hover:text-secendary flex items-center gap-3 mt-3 lg:mt-0'>Template <BsChevronDown className='hidden lg:block'/></li>
                        <li className='font-primary text-primary text-sm font-normal hover:text-secendary flex items-center gap-3 mt-3 lg:mt-0'>Blog </li>
                        <li className='font-primary text-primary text-sm font-normal hover:text-secendary flex items-center gap-3 mt-3 lg:mt-0'>Pricing </li>
                    </ul>
                </div>
                <div className='lg:w-[35%] lg:flex justify-end'>
                    <div className='lg:flex gap-x-14'>
                        <button className='font-primary text-primary text-sm font-normal block mt-3 lg:mt-0'>Sing In</button>
                        <button className='font-primary text-sm font-semibold bg-secendary px-5 lg:px-9 py-2 lg:py-4 text-white rounded-lg block mt-3 lg:mt-0'>Start Free</button>
                    </div>
                </div>
                </div>

                }
            </div>
        </div>
    </Container>
   </nav>
  )
}

export default Navbar