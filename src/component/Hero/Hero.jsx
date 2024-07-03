import React from 'react'
import women from "../../assets/women.png"
import shopping from "../../assets/shopping.png"
import sale from "../../assets/sale.png"
import Slider from "react-slick"

const Hero = () => {
    const ImageList = [
        {
          id: 1,
          img: women,
          title: "Upto 50% off on all Men's Wear",
          description:
            "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 2,
          img: shopping,
          title: "30% off on all Women's Wear",
          description:
            "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 3,
          img: sale,
          title: "70% off on all Products Sale",
          description:
            "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ];
      var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
      };
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
        {/* background pattern  */}
        <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section  */}
      <div className='container pb-8 sm:pb-0'>
        <Slider {...settings}>

            {ImageList.map(item=>{
            
            return <div>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
             {/* text content section   */}
             <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left  order-1'>
                <h1
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true" 
                 className='text-5xl sm:text-6xl lg:text-6xl font-bold'>{item.title}</h1>
                <p
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true" 
                className='text-sm'>{item.description}</p>
                <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="300"
                 >
                    <button className=' bg-gradient-to-r from-primary to-secondary hover:scale-x-105  duration-200 text-white rounded-full py-2 px-4 '>
                        Order Now
                    </button>
                </div>
             </div>
             {/* image section  */}
             <div className='order:0 sm:order-2'>
                <div className='relative z-10'>
                      <img src={item.img} alt="women_logo" className='w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-125 mx-auto'/></div>
                </div>
            </div>
        </div>


            })}
        
   
        </Slider>
        
      </div>
    </div>
  )
}

export default Hero