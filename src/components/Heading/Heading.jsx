import React from 'react'
import './Heading.css'
import img1 from '../../assets/images/main_banner1.jpg'
import img2 from '../../assets/images/main_banner2.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination } from 'swiper/modules';
import img_1 from '../../assets/images/heading-1.png'
import img_2 from '../../assets/images/heading-2.png'
import img_3 from '../../assets/images/heading-3.png'
import img_4 from '../../assets/images/heading-4.png'


function Heading() {
  return (
    <div className='Heading mb-5'>
        <Swiper className='container'
        modules={[Pagination]}
        pagination= {{
          clickable:true,
          
        }}
        >
          <SwiperSlide>
            <img src={img1} className='card-img logo ' style={{height:'70vh' } } alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} className='card-img logo ' style={{height:'70vh', } } alt="" />
            
          </SwiperSlide>
        </Swiper>

        <div className="container mb-5 mt-5'">
          <div className="row g-3 mt-5">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className='flex gap-3'>
                <div>
                  <img src={img_1} alt="" />
                </div>
                <div>
                  <b>Free Shipping</b>
                  <p className='fw-lighter'>Free dedlivery worldwide</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className='flex gap-3'>
                <div>
                  <img src={img_2} alt="" />
                </div>
                <div>
                  <b>Order Online</b>
                  <p className='fw-lighter'>Free dedlivery worldwide</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className='flex gap-3'>
                <div>
                  <img src={img_3} alt="" />
                </div>
                <div>
                  <b>Shop And Save</b>
                  <p className='fw-lighter'>Free dedlivery worldwide</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className='flex gap-3'>
                <div>
                  <img src={img_4} alt="" />
                </div>
                <div>
                  <b>Safe Shoping</b>
                  <p className='fw-lighter'>Free dedlivery worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      
    </div>
  )
}

export default Heading
