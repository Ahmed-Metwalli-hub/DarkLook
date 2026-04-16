import React, { useContext, useEffect, useRef, useState } from 'react'
import './Navbar.css'
import {Link, NavLink} from 'react-router-dom'
import { Swiper, SwiperSlide } from 'Swiper/react';
import { Autoplay } from 'Swiper/modules';
import 'swiper/css';
import banner1 from '../../assets/images/menu-banner1.jpg'
import banner2 from '../../assets/images/menu-banner2.jpg'
import banner3 from '../../assets/images/menu-banner3.jpg'
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { CartContext } from '../../Context/CartContext';


function Navbar() {
   const [open,setOpen] = useState(true)
    const menuRef = useRef();

    useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setOpen(true);
    }
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
  
}, []);

const { wishlist } = useContext(CartContext);
   return (
       <nav className='container position-relative'>
        <b ref={menuRef} className='menu'>Menu</b>
        {
            open ?
            (<span onClick={()=>setOpen(false)} className='menu-icon'><IoIosMenu /></span>)
            :(
                
                <span onClick={()=>setOpen(true)} className='close-icon open'><IoMdClose /></span>
            )
        }
        

        <ul className={open? "":"open"}>
            <li>
                <NavLink to=''>home</NavLink>
            </li>
            <li className='collection'>
                <a>collection</a>
                <div className="dropdown p-5 position-absolute container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className='d-flex flex-column gap-3'>
                                <b className='fs-5 fw-bold'>Women's</b>
                                <div className='d-flex category flex-column gap-1'>
                                    <a href="#"> Unique Features </a>
                                    <a href="#"> Image Responsive</a>
                                    <a href="#"> Auto Carousel </a>
                                    <a href="#"> Newsletter Form </a>
                                    <a href="#"> Four columns </a>
                                    <a href="#"> Newsletter Form </a>
                                    <a href="#"> Good Typography </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className='d-flex flex-column gap-3'>
                                <b className='fs-5 fw-bold'>Mens's</b>
                                <div className='d-flex category flex-column gap-1'>
                                    <a href="#"> Unique Features </a>
                                    <a href="#"> Image Responsive</a>
                                    <a href="#"> Auto Carousel </a>
                                    <a href="#"> Newsletter Form </a>
                                    <a href="#"> Four columns </a>
                                    <a href="#"> Newsletter Form </a>
                                    <a href="#"> Good Typography </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className='d-flex flex-column gap-3'>
                                <b className='fs-5 fw-bold'>kids's</b>
                                <div className='d-flex category flex-column gap-1'>
                                    <a href="#"> Unique Features </a>
                                    <a href="#"> Image Responsive</a>
                                    <a href="#"> Auto Carousel </a>
                                    <a href="#"> Newsletter Form </a>
                                    <a href="#"> Four columns </a>
                                    <a href="#"> Newsletter Form </a>
                                    <a href="#"> Good Typography </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <Swiper
                            modules={[Autoplay]} 
                            autoplay={{
                                delay : 500
                            }}
                            >
                                <SwiperSlide>
                                    <img src={banner1} alt="" className='w-100' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={banner2} alt="" className='w-100' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={banner3} alt="" className='w-100'/>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>

                </div>
            </li>
            <li>
                <NavLink to='shop'>shop</NavLink>
            </li>
            <li>
                <NavLink to='blog'>blog</NavLink>
            </li>
            <li className='pages position-relative'>
                <a>pages</a>
                <div className="dropdown two">
                    <Link to={'cart'}>cart</Link>
                    <Link to={'wishlist'}>wichlist ( {wishlist.length} )</Link>
                    <Link to={"shop/singlepropage/0"}>product details page</Link>
                    <Link to={"singlePost"}>single post</Link>

                </div>
            </li>
            <li>
                <NavLink to='about'>about us</NavLink>
            </li>
            <li>
                <NavLink to='contact'>contact us</NavLink>
            </li>
        </ul>
      
    </nav>
  )
}

export default Navbar
