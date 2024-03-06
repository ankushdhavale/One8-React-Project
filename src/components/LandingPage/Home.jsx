import { NavLink } from 'react-router-dom';
import './Home.css';
import { useState } from 'react';
const  Home = () =>{
    const [nevigate , setNavigate] = useState("/product")
    return(
        <div>
            <div className='homeImage-container relative'>
                <img 
                className='homeImage'
                src="https://res.cloudinary.com/doohtm4bs/image/upload/v1647335640/E-commerce/landingPage/landing-img_zv7bxe.avif" alt="" />
                {/* <img src="https://www.one8.com/img/home/logo-yellow.png" alt="" /> */}
                <section className='home-text absolute'>
                      <p className='home-p-text text-[10vw] leading-none tracking-tighter font-bold text-amber-400'>BE READY</p>
                      <p className='home-p-text text-[10vw] leading-none font-bold text-amber-400 mb-5'>BE BETTER</p> 
                      <NavLink
                        to="/product"
                        className='homeButton'
                      >
                        <button className=' bg-transparent border border-amber-400 text-white px-4 py-1 rounded-sm hover:bg-amber-200 hover:text-black'>Shop Now</button>
                      </NavLink>
                 </section>
                 <div className='viratpng absolute'>
                     <img src="https://www.one8.com/img/home/banner_vk.png" alt="virat-kohli" />
                 </div>
            </div>
            <div className='sub-container'>
                    <h1 className="sub-head">Featured Brands</h1>
                    <section className="brands-container flex flex-row gap-5">
                    <NavLink to={"/product"}>
                        <img
                            src="https://res.cloudinary.com/doohtm4bs/image/upload/v1647336355/E-commerce/landingPage/nike-logo_lmbsfw.jpg"
                            alt="nike"
                            className="brand-img"
                        />
                    </NavLink>
                    <NavLink to={"/product"}>
                        <img
                            src="https://res.cloudinary.com/doohtm4bs/image/upload/v1647336355/E-commerce/landingPage/adidas-logo_o6ltbw.jpg"
                            alt="adidas"
                            className="brand-img"
                        />
                    </NavLink>
                    <NavLink to={"/product"}>
                        <img 
                            src="https://res.cloudinary.com/doohtm4bs/image/upload/v1647336385/E-commerce/landingPage/puma_tgznyt.jpg" 
                            alt="puma" 
                            className="brand-img"
                        />  
                    </NavLink>
                    <NavLink to={"/product"}>
                        <img
                            src="https://res.cloudinary.com/doohtm4bs/image/upload/v1649345671/E-commerce/landingPage/hrx_oahtdx.jpg"
                            alt="hrx"
                            className="brand-img"
                        />
                    </NavLink>
                    </section>
                 </div>
        </div>
    )
} 

export default Home;