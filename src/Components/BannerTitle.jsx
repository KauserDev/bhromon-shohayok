import { FaArrowRightLong } from "react-icons/fa6";
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import Sajek from "../../public/images/Sajek.png";
import Sreemongol from "../../public/images/Sreemongol.png";
import sundorbon from "../../public/images/sundorbon.png";





const BannerTitle = () => {
    
  
  return (
    <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:px-20 lg:py-16"> 
      
      <div className="w-full p-4 space-y-5 text-center lg:w-1/2 lg:text-left lg:p-0"> 
        <h1 className="text-3xl font-bold text-white lg:text-5xl">SAINT MARTIN'S</h1> 
        <p className="text-sm font-light leading-relaxed text-white">
          Saint Martin's Island is a small coral island and tourism spot in the Bay of Bengal, 
          known as the only coral reef in Bangladesh. It is famous for its clean blue water, 
          marine life, and attractive sandy beaches.
        </p>

        <Link to='/destination' className="flex items-center gap-2 px-6 py-3 mx-auto mb-8 text-sm font-medium rounded-lg shadow-2xl w-31 btn bg-amber-400 hover:bg-amber-500 lg:mx-0">
          Booking <FaArrowRightLong />
        </Link>
      </div>

<div className="relative w-full p-4 lg:w-1/2"> 
    <div className="relative">
        <div className="gap-3 carousel carousel-end rounded-box" id="my-daisyui-carousel">

            <div id="slide1" className="relative carousel-item">
                <img 
                    className="object-cover rounded-md w-72 h-96" 
                    src={Sajek} 
                    alt="Saint Martin's" 
                />

                <div className="absolute bottom-0 p-4">
                    <h2 className="text-xl font-semibold text-white">SAINT MARTIN'S</h2>
                </div>
            </div>
            <div id="slide2" className="relative carousel-item">
                <img
                    className="object-cover rounded-md w-72 h-96" 
                    src={Sreemongol} 
                    alt="Sreemongol" 
                />
                <div className="absolute bottom-0 p-4">
                    <h2 className="text-xl font-semibold text-white">SREEMONGOL</h2>
                </div>
            </div>
            <div id="slide3" className="relative carousel-item">
                <img
                    className="object-cover rounded-md w-72 h-96"
                    src={sundorbon} 
                    alt="Sundorbon" 
                />
                <div className="absolute bottom-0 p-4">
                    <h2 className="text-xl font-semibold text-white">SUNDORBON</h2>
                </div>
            </div>
            
        </div>
    </div>
</div>
    </div>
  );
};

export default BannerTitle;