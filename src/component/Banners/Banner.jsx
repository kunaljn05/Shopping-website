import React from "react";
import women2 from "../../assets/women2.jpg"
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { RiEmotionHappyLine } from "react-icons/ri";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-10 ">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center items-center gap-6">
          {/* image section*/}
          <div data-aos="zoom-in">
            <img src={women2} alt="" className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover" />
          </div>
          {/* body section  */}
          <div className="flex flex-col justify-center gap-6">
            <h1 className="text-3xl sm:text-4xl font-bold">Winter Sale Up Tpp 50% Off</h1>
            <p className="text-sm text-gray-500 tracking-wide leading-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus nemo dignissimos omnis animi?</p>
            <div className="flex flex-col gap-4"> 
            <div className="flex gap-5 items-center">
                <GrSecure className=" text-4xl h-12 w-12 shadow-sm p-4 dark:bg-violet-400 rounded-full bg-violet-100"/>
                <p className="text-xl font-semibold">Quality Product</p>
            </div>
            <div className="flex gap-5 items-center">
                <IoFastFood className=" text-4xl h-12 w-12 shadow-sm p-4 dark:bg-orange-400 rounded-full bg-orange-100"/>
                <p className="text-xl font-semibold">Fast Delivery</p>
            </div>
            <div className="flex gap-5 items-center">
                <GiFoodTruck className=" text-4xl h-12 w-12 shadow-sm p-4 dark:bg-green-400 rounded-full bg-green-100"/>
                <p className="text-xl font-semibold">Easy Payment Method</p>
            </div>
            <div className="flex gap-5 items-center">
                <RiEmotionHappyLine  className=" text-4xl h-12 w-12 shadow-sm p-4 dark:bg-yellow-400 rounded-full bg-yellow-200"/>
                <p className="text-xl> font-semibold">Get Offers</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
