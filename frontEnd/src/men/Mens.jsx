import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Men from '../components/Men'

function Mens() {
  return (
    <>
     <NavBar/>
    <div className='min-h-screen'>
    <Men/>
    </div>
   <Footer/>
    </>
  )
}

export default Mens