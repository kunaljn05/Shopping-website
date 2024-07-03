import React from 'react'
import logo from "../../assets/logo.png"
import { IoMdSearch} from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import Darkmode from '../Darkmode';

const Navbar = () => {
    const Menu = [
        {
          id: 1,
          name: "Home",
          link: "/#",
        },
        {
          id: 2,
          name: "Top Rated",
          link: "/#services",
        },
        {
          id: 3,
          name: "Kids Wear",
          link: "/#",
        },
        {
          id: 3,
          name: "Mens Wear",
          link: "/#",
        },
        {
          id: 3,
          name: "Electronics",
          link: "/#",
        },
      ];
      const DropdownLinks = [
        {
          id: 1,
          name: "Trending Products",
          link: "/#",
        },
        {
          id: 2,
          name: "Best Selling",
          link: "/#",
        },
        {
          id: 3,
          name: "Top Rated",
          link: "/#",
        },
      ];
  return (
    
    <div>

    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200  '>
        <div className='bg-primary/40 py-2' >
        {/* upper navbar  */}
        <div className='flex justify-around items-center'>
            <div >
                {/* for logo and website name / */}
                <a href="#" className='font-bold text-xl md:text-3xl flex items-center gap-2 mr-8'>
                    <img src={logo} alt="logo" className='w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px]'/>
                     <p>shopsy</p>
                </a>
            </div>
            <div className='flex justify-between items-center gap-4'>
            <div className='relative hidden sm:block'>
                {/* for search button and cart and dark/bright image  */}
                <input type="text" name='search' placeholder='Search' className='w-[80px]  md:w-[200px] md:hover:scale-x-110  transform transition-transform duration-300 rounded-full border border-gray-300 py-0.2 px-1 md:px-2 md:py-1 focus:outline-none focus:border-primary' />
                <IoMdSearch className="text-gray-500 hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <div>
                {/* for order cart  */}
                <button className='bg-gradient-to-r from-primary to-secondary transition-all duration-300 text-white py-1 px-4 rounded-full group flex items-center gap-3'  onClick={()=>{alert("button clicked")}}>
                    <span className='group-hover:block hidden transition-all duration-300'>Order</span>
                     <FaCartShopping className='text-white text-xl drop-shadow-sm cursor-pointer'/> 
                </button>
            </div>
            <div>
                <Darkmode/>
            </div>
            </div>
        </div>
    </div>
  

    {/* lower navbar  */}

   <div className='hidden sm:block'>
   <div className='flex justify-center h-[55px] shadow-md'>
        <ul className='flex items-center gap-8'>
            {Menu.map(data=>{
                return <li>
                    <a className='hover:text-primary transition-all duration-300 font-bold text-xl' href={data.link}>{data.name}</a>
                </li>
            })}
           <div className='relative group cursor-pointer hover:text-primary transition-all duration-300'>
            <span className='font-bold text-xl'>Trending</span>
            <div className='absolute ml-3 mt-1 w-[140px] h-[100px]  p-1 shadow-md text-black hidden group-hover:block z-20 bg-white'>
               <ul className='mt-4'>
                 {DropdownLinks.map(data=>{
                    return <li className='text-[13px] mt-1.5 p-0.9 hover:bg-primary/20 transition-all duration-300 '>
                        <a href={data.link}>{data.name}</a>
                    </li>
                 })}
               </ul>
            </div>
           </div>
        </ul>
    </div>
   </div>
   </div>
 </div>
  )
}

export default Navbar

// sm: '480px',
// md: '768px',
// lg: '976px',
// xl: '1440px',