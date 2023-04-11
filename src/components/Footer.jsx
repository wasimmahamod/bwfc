import React from 'react'
import Container from './../layout/Container';

const Footer = () => {
  return (
    <div className='bg-[#1B1C31] pt-10 lg:pt-[111px] relative '>
       <Container>
        <div className='flex flex-wrap justify-between'>
            <div className='lg:w-[55%] '>
                <img src="img/flogo.png" alt="" />
                <p className='w-auto xl:w-[530px] font-primary text-md lg:text-lg font-normal text-[#757095] leading-[26px] mt-4 lg:mt-9 '>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
            </div>
            <div className='mt-5 lg:mt-0 lg:w-[15%] '>
                <h3 className='font-primary text-lg text-white font-bold mb-9'>Company</h3>
                <ul>
                    <li className='font-primary text-base font-normal  text-white mb-7'>About Us</li>
                    <li className='font-primary text-base font-normal  text-white mb-7'>Careers</li>
                    <li className='font-primary text-base font-normal  text-white mb-7'>Blog</li>
                    <li className='font-primary text-base font-normal  text-white mb-7'>Pricing</li>
                </ul>
            </div>
            <div className='mt-5 lg:mt-0 lg:w-[15%] '>
                <h3 className='font-primary text-lg text-white font-bold mb-9'>Product</h3>
                <ul>
                    <li className='font-primary text-base font-normal  text-white mb-7'>Invoicing Platform</li>
                    <li className='font-primary text-base font-normal  text-white mb-7'>Accounting Plateform</li>
                    <li className='font-primary text-base font-normal  text-white mb-7'>Create Proposal</li>
                    <li className='font-primary text-base font-normal  text-white mb-7'>Contracts</li>
                </ul>
            </div>
            <div className=' mt-5 lg:mt-0 lg:w-[15%] '>
                <h3 className='font-primary text-lg text-white font-bold mb-9'>Resources</h3>
                <ul>
                    <li className='font-primary text-base font-normal  text-white mb-7'>Proposal Template</li>
                    <li className='font-primary text-base font-normal  text-white mb-7'>Invoice Template</li>
                    <li className='font-primary text-base font-normal  text-white mb-7'>Tuturoial</li>
                    <li className='font-primary text-base font-normal  text-white mb-7'>How to write a contract</li>
                </ul>
            </div>
        </div>
     <div className='mt-10 lg:mt-[126px] pb-5'>
        <div className='hidden lg:block border border-1 border-[#404444] absolute bottom-16 left-0 w-full'></div>
     <div className='flex flex-wrap justify-between'>
        <h3 className='font-primary text-sm text-white font-semibold'>2022 AR Shakir. All rights reserved. -- Privacy Policy - Terms of Services</h3>
        <h3 className='font-primary text-sm text-white font-semibold'>Supported by Microsoft Startup</h3>
        </div>
     </div>
       </Container>
    </div>
  )
}

export default Footer