import React from "react";
import {Link} from 'react-router-dom'
function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container max-auto md:px-20 px-4 flex flex-col md:flex-row mt-12">
        <div className="w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1">
          <div className="space-y-4">
            <h3 className="font-bold text-xl ">UP TO 15% DISCOUNT</h3>
            <h1 className="font-bold text-4xl md:text-6xl">Checkout the </h1>
            <h1 className="font-bold text-4xl md:text-6xl">Best Fashion</h1>
            <h1 className="font-bold text-4xl md:text-6xl">Style</h1>
            <div className="">
             <Link to="/shop">
             <button className=" mt-2 border bg-slate-950 text-white py-4 px-7 rounded-md  hover:text-orange-500">
                SHOP NOW
              </button >
             </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 order-1">
          <div>
            <img
              src="https://shemashop.vercel.app/static/media/men2.e2bb29b95d23d0e4e42f.png"
              alt=""
              className="mt-14 "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
