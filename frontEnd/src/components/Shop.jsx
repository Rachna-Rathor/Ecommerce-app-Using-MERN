import React, { useEffect, useState } from 'react'
// import dataList from '../data/data'
import axios from "axios"
import MainCard from './MainCard';

function Shop() {
  const [shop,setshop]=useState([])
  useEffect(()=>{
    const getShop=async()=>{
      try {
        const res=await axios.get("http://localhost:3000/item/v1/getItem")
        console.log(res.data)
        setshop(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getShop();
  },[])
  // console.log(dataList)
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className="font-semibold text-gray-800 text-3xl mb-2 mt-32 md:mt-32">
          All Collection
        </div>
        <progress
          className="progress w-32 h-1 bg-orange-500 rounded-full mb-10" // Changed width to w-24 for shorter length
          value={0}
          max={100}
        />
        <div className='mt-10 grid md:grid-cols-3 grid-cols-1'>
         {shop.map((item)=>(
           <MainCard item={item}/>
         ))}
        </div>
      </div>
    </>
  )
}

export default Shop;
