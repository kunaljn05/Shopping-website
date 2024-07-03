import React from 'react';
import orangeBanner from "../../assets/orangeBanner.jpg"
const BannerImg = {
    backgroundImage: `url(${orangeBanner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  
  const Subscribe = () => {
    return (
      <div
        data-aos="zoom-in"
        className="mb-20 bg-gray-100 dark:bg-gray-800 text-white "
        style={BannerImg}
      >
        <div className='container'>
            <div className='flex flex-col justify-center items-center h-[220px] w-full gap-5'>
                <h1 className='text-2xl sm:text-4xl lg:text-5xl font-semibold text-center' aos-data="fade-up">Get Notified About New Products</h1>
                <div>
                <input type="email" name='email' placeholder='Enter your email' className='w-[350px] sm:w-[600px] p-3' data-aos="fade-up" />
                </div>
            </div>
        </div>
      </div>
    );
  };

export default Subscribe