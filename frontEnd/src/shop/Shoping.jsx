import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Shop from '../components/Shop'

function Shoping() {
  return (
   <>
   <NavBar/>
    <div className='min-h-screen'>
    <Shop/>
    </div>
   <Footer/>
   </>
  )
}

export default Shoping