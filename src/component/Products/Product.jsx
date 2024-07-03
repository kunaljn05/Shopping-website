import React from 'react'
import women from "../../assets/women.png" 
import women2 from "../../assets/women2.jpg";
import women3 from "../../assets/women3.jpg" 
import women4 from "../../assets/women4.jpg" 
import { FaStar } from 'react-icons/fa6';

const Product = () => {
    const ProductsData = [
        {
          id: 1,
          img: women2,
          title: "Women Ethnic",
          rating: 5.0,
          color: "white",
          aosDelay: "0",
        },
        {
          id: 2,
          img: women,
          title: "Women western",
          rating: 4.5,
          color: "Red",
          aosDelay: "200",
        },
        {
          id: 3,
          img: women3,
          title: "Goggles",
          rating: 4.7,
          color: "brown",
          aosDelay: "400",
        },
        {
          id: 4,
          img: women4,
          title: "Printed T-Shirt",
          rating: 4.4,
          color: "Yellow",
          aosDelay: "600",
        },
        {
          id: 5,
          img: women2,
          title: "Fashin T-Shirt",
          rating: 4.5,
          color: "Pink",
          aosDelay: "800",
        },
      ];
  return (
    <div className='mt-10 mb-14'>
        <div className='container'>
            {/* Header section  */}
            <div className='text-center max-w-[600px] mx-auto mb-10'>
                <p className='text-primary text-lg  data-aos= "fade-up"'>Top Selling Product for you</p>
                <h1 className='font-bold text-3xl py-1  data-aos= "fade-up"'>Products</h1>
                <p className='text-gray-400 text-xs  data-aos= "fade-up"'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quis provident facere cum est architecto.</p>
            </div>
            {/* Product section  */}
            <div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md-grid-cols-4 lg:grid-cols-5 gap-5 place-items-center mx-2'>
                  {/* card section  */}
                  {
                    ProductsData.map(data=>{
                       return <div data-aos= "fade-up" data-aos-delay={data.aosDelay} key={data.id} className='space-y-[4px]'>
                        {/* images rendering  */}
                        <div>
                        <img src={data.img} alt='image' className='h-[220px] w-[150px] object-cover rounded-md'/>
                       </div>
                        {/* title rendering  */}
                        
                        <h3 className='font-semibold'>{data.title}</h3>
                        <p className='text-sm text-gray-700'>{data.color}</p>
                        <div className='flex gap-1'>
                            <FaStar className='text-yellow-400 mt-1'></FaStar>
                            <span>{data.rating}</span>
                        </div>
                       </div>
                    })
                  }
                </div>
                <div className='flex items-center justify-center mt-14'>
                    <button className='bg-primary text-white rounded-xl p-3 w-[150px] sm:w-[200px] sm:text-xl'>View All  Products</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product