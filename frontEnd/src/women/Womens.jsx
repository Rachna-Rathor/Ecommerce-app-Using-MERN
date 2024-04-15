import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Women from '../components/Women'

function Womens() {
  return (
    <>
    <NavBar/>
   <div className='min-h-screen'>
    <Women/>
   </div>
  <Footer/>
   </>
  )
}

export default Womens