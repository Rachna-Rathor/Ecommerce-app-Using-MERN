import { FaHeart, FaShoppingCart } from 'react-icons/fa';


import React from "react";

function MainCard({ item }) {
  console.log(item);
  return (
    <div className="max-w-screen-2xl container max-auto md:px-20 px-2">
      <div className="mb-10">
        <div className="h-96 w-80 border rounded-md shadow-md flex flex-col items-center space-y-4 hover:scale-105 duration-200">
          <img
            src={item.img}
            alt=""
            className="h-2/3 w-full object-cover rounded-t-md"
          />
          <div className="flex flex-col items-center justify-center flex-1">
            <p className="text-center font-bold">{item.company}</p>
            <p className="text-center">{item.title}</p>
          </div>
          <div className="flex justify-between w-full px-4">
          <FaHeart />
            <span>{item.price}</span>
            <FaShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
