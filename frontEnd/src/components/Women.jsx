
import axios from "axios"
import React, { useEffect, useState } from 'react'

import MainCard from './MainCard';
// import dataList from '../data/data'


function Women() {
  const [shop,setshop]=useState([])
  useEffect(()=>{
    const getShop=async()=>{
      try {
        const res=await axios.get("http://localhost:3000/item/v1/getItem")
        console.log(res.data)
        const filteredData = res.data.filter(item => item.gender === 'women');

        setshop(filteredData)
      } catch (error) {
        console.log(error);
      }
    }
    getShop();
  },[])
  // const filteredData = dataList.filter(item => item.gender === 'women');
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className="font-semibold text-gray-800 text-3xl mb-2 mt-32 md:mt-32">
        Women's Fashion
        </div>
        <progress
          className="progress w-44 h-1 bg-orange-500 rounded-full mb-10" // Changed width to w-24 for shorter length
          value={0}
          max={100}
        />
        <div className='mt-10 grid md:grid-cols-3 grid-cols-1'>
        {shop.map((item) => (
            <MainCard item={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Women