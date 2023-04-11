import React from 'react'
import Container from '../layout/Container'

const Sponsor = () => {
  return (
    <div className='mt-[78px] bg-[#FFFFFF]'>
        <Container>
            <h2 className='font-primary text-primary text-2xl font-normal text-center'>Over 32k+ software  businesses growing with AR Shakir</h2>
            <div className='flex justify-between flex-wrap mt-9 gap-y-5 xl:gap-y-0 gap-x-10'>
                <img src="img/s1.png" alt="sponsor1" />
                <img src="img/s2.png" alt="sponsor1" />
                <img src="img/s3.png" alt="sponsor1" />
                <img src="img/s4.png" alt="sponsor1" />
                <img src="img/s5.png" alt="sponsor1" />
                <img src="img/s6.png" alt="sponsor1" />

            </div>
        </Container>
    </div>
  )
}

export default Sponsor