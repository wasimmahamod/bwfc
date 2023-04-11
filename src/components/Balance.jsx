import React from 'react'
import Container from '../layout/Container'
import Feature from '../layout/Feature'

const Balance = () => {
  return (
    <div className='mt-[50px] lg:mt-[113px] relative '>
        <Container>
            <div className='sm:flex justify-between'>
                <div className=' lg:w-2/4'>
                    <img className='lg:ml-[-50px] ' src="img/balance.png" alt="" />
                </div>
                <div className='lg:w-2/4'>
                 <Feature title="Receive payments
quickly from anywhere" dbtn={false}/>
                </div>
            </div>
        </Container>
        <img className='absolute top-0 left-0' src="img/balanceshape.png" alt="" />
    </div>
  )
}

export default Balance