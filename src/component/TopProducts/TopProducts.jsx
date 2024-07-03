import React from 'react'
import shirt from "../../assets/shirt.png" 
import shirt2 from "../../assets/shirt2.png" 
import shirt3 from "../../assets/shirt3.png" 
import { FaStar } from 'react-icons/fa6'

const TopProducts = () => {
    const ProductsData = [
        {
          id: 1,
          img: shirt,
          title: "Casual Wear",
          description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 2,
          img: shirt2,
          title: "Printed shirt",
          description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 3,
          img: shirt3,
          title: "Women shirt",
          description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ];
  return (
    <div className='mb-6'>
        <div className='container'>
            {/* Header section  */}
            <div className='text-left  mb-10'>
                <p className='text-primary text-lg  data-aos= "fade-up"'>Top Rated Product for you</p>
                <h1 className='font-bold text-3xl py-1  data-aos= "fade-up"'>Best Products</h1>
                <p className='text-gray-400 text-xs  data-aos= "fade-up"'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quis provident facere cum est architecto.</p>
            </div>
            {/* Body section  */}
            <div className='grid grid-cols-2 sm:grid-cols-3 place-items-center gap-20'>
             {
                ProductsData.map(data=>{
                 
                    return <div data-aos= "fade-up" data-aos-delay={200}  className='bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] mt-20'>
    
                      <div>
                        <img src={data.img} alt="image" className='max-w-[200px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md' />
                      </div>

                      <div className='absolute top-1/2 mt-3 space-y-1'>
                        <div className='flex  justify-center items-center w-full gap-1'>
                            <FaStar className='text-yellow-500'></FaStar>
                            <FaStar className='text-yellow-500'></FaStar>
                            <FaStar className='text-yellow-500'></FaStar>
                            <FaStar className='text-yellow-500'></FaStar>
                        </div>
                        <h1 className='text-xl font-bold text-center'>{data.title}</h1>
                        <p className='text-xs text-gray-400 group-hover:text-white line-clamp-2 text-center'>{data.description}</p>
                      </div>
                      <div className='text-center py-2 mt-3 mb-2'>
                        <button className=' bg-gradient-to-r from-primary to-secondary hover:scale-x-105  duration-200 text-white rounded-full py-2 px-4 '>Order Now</button>
                      </div>
                    </div>
                })
             }
            </div>
        </div>
    </div>
  )
}

export default TopProducts