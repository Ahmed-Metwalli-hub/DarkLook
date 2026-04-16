import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";





function Footer() {
  return (
    <>
    <div className='Footer'>
        <div className="follow flex row ">
          <div className="col-lg-6" >
            <b className='fs-3 '>FOLLOW OUR UPDATES !</b>
            <p style={{fontSize:'13px'}} >Be the first to know about our Fresh Arrivals and much more!</p>
          </div>
          <div style={{flexWrap:'wrap'}} className='col-lg-6 flex'>
            <input type="email" placeholder='Enter Your Email'  />
            <button style={{fontSize:'16px'}}>subscribe</button>
          </div>
        </div>
        <div className='row my-5 g-4'>
          <div className="col-lg-3 col-md-6">
            <b>INFORMATION</b>
            <a href="#">about us</a>
            <a href="#">deleviery information</a>
            <a href="#">privacy policy</a>
            <a href="#">terms & Conditions</a>
            <a href="#">contact us</a>
          </div>
          <div className="col-lg-3 col-md-6">
            <b>SERVICES</b>
            <a href="#">returns</a>
            <a href="#">site map</a>
            <a href="#">wish list</a>
            <a href="#">my account</a>
            <a href="#">order history</a>
          </div>
          <div className="col-lg-3 col-md-6">
            <b>EXTRAS</b>
            <a href="#">brands</a>
            <a href="#">gift certificated</a>
            <a href="#">affiliate</a>
            <a href="#">specials</a>
            <a href="#">Newsletter</a>
          </div>
          <div className="col-lg-3 col-md-6">
            <b>CONTACTS</b>
            <a href="#">Warehouse & Offices,</a>
            <a href="#">12345 Street name, California USA</a>
            <a href="#">(+024) 666 888</a>
            <a href="#">yourid@domain.com</a>
            <a href="#">www.yoursite.com</a>
          </div>
          
        </div>
        
      
    </div>
    <div className="Footer2 row py-3 g-2">
          <div className="col-lg-4 ">
            <div className='flex gap-3'>
             <i><FaFacebookF /></i>
              <i><FaGoogle /></i>
              <i><FaLinkedinIn /></i>
              <i><FaSquareXTwitter /></i>
              <i><IoIosCall /></i>
            </div>
          </div>
          <div className="col-lg-4 ">
            <div className='flex'>
              <p className='m-0 p-0'>@ 2026 All Rights Reserved Darklook</p>
            </div>
          </div>
          <div className="col-lg-4 ">
            <div className='flex gap-3'>
              <i><FaCcPaypal /></i>
              <i><FaCcVisa /></i>
              <i><FaCcDiscover /></i>
              <i><FaCcMastercard /></i>
              <i><SiAmericanexpress /></i>
            </div>
          </div>
          
        </div>
    </>
  )
}

export default Footer
