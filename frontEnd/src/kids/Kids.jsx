import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Kidses from '../components/Kidses'

function Kids() {
  return (
    <>
    <NavBar/>
    <div className='min-h-full'>
      <Kidses/>
    </div>
    <Footer/>
    </>
  )
}

export default Kids