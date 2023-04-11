import React from 'react'
import Balance from './components/Balance'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Sponsor from './components/Sponsor'
import Register from './components/Register'
import Teacher from './components/Teacher'
import Testimonal from './components/Testimonal'
import Payment from './components/Payment'
import Choose from './components/Choose'
import Cta from './components/Cta'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Sponsor/>
        <Balance/>
        <Register/>
        <Teacher/>
        <Testimonal/>
        <Payment/>
        <Choose/>
        <Cta/>
        <Footer/>
    </div>
  )
}

export default App