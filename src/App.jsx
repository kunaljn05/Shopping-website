import React, { useEffect } from 'react'
import Navbar from './component/navbar/Navbar'
import Hero from './component/Hero/Hero'
import Product from './component/Products/Product'
import AOS from "aos";
import "aos/dist/aos.css"
import TopProducts from './component/TopProducts/TopProducts';
import Banner from './component/Banners/Banner';
import Subscribe from './component/Subscribe/Subscribe';
import Testimonial from './component/Testimonial/Testimonial';
import Footer from './component/Footer/Footer';
const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
  <div>
    <Navbar/>
    <Hero/>
    <Product/>  
    <TopProducts/>  
    <Banner/>  
    <Subscribe/>  
    <Testimonial/>
    <Footer/>
  </div>
  )
}

export default App
