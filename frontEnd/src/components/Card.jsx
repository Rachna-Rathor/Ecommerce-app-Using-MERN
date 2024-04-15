
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useEffect, useState } from 'react'
import axios from "axios"

// import data from "../data/data";
import MainCard from "./MainCard";

function Card() {
   
  const [shop,setshop]=useState([])
  useEffect(()=>{
    const getShop=async()=>{
      try {
        const res=await axios.get("http://localhost:3000/item/v1/getItem")
        console.log(res.data)
        const filteredData = res.data.filter(item => item.category === 'free');

        setshop(filteredData)
      } catch (error) {
        console.log(error);
      }
    }
    getShop();
  },[])



  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // const dataList = data.filter((list) => list.category === "free");
  // console.log(dataList);
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center mt-12">
        {" "}
        {/* Use h-screen to make div take full viewport height */}
        <div className="font-bold text-black text-3xl mb-2">
          {" "}
          {/* Add margin-bottom to space out text and progress bar */}
          Featured Categories
        </div>
        <progress
          className="progress w-56 h-2 bg-orange-500 rounded-full mb-10" // Removed unnecessary classes
          value={0}
          max={100}
        />
      </div>

      {/* slider */}
      <div className="max-w-screen-2xl container max-auto md:px-20 px-4">
        <div className="slider-container">
          <Slider {...settings}>
           {shop.map((item)=>(
            <MainCard item={item} />
           ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Card;
