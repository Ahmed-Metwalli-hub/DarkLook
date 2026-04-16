import React from 'react'
import './LatestNews.css'
import SubTitle from '../SubTitle'
import {Swiper , SwiperSlide} from 'Swiper/react'
import {Autoplay , Pagination , Navigation } from 'Swiper/modules'
import brand1 from '../../assets/images/brand/brand1.png'
import brand2 from '../../assets/images/brand/brand2.png'
import brand3 from '../../assets/images/brand/brand3.png'
import brand4 from '../../assets/images/brand/brand4.png'
import brand5 from '../../assets/images/brand/brand5.png'
import brand6 from '../../assets/images/brand/brand6.png'
import brand7 from '../../assets/images/brand/brand7.png'
import brand8 from '../../assets/images/brand/brand8.png'
import brand9 from '../../assets/images/brand/brand9.png'
import ProNews from './ProNews'


function BrandLogo() {
  return (
    <div  className='LatestNews my-5'>
        <SubTitle num='1' name = 'BRAND LOGO' />
        <div className="container mt-4">
            <Swiper className="row "
            slidesPerView={1}
            spaceBetween={20}
            modules={[Autoplay  , Navigation]}
            autoplay={{
                delay:2000,
                pauseOnMouseEnter:true
                
            }}
            navigation={{
                prevEl: '.Feature .slide-to-left ' ,
                nextEl: '.Feature .slide-to-right '
                
            }}
            loop= {true}
            breakpoints={{
                0 : {
                    slidesPerView : 1
                },
                544 : {
                    slidesPerView : 2
                },
                768 : {
                    slidesPerView : 3
                },
                992 : {
                    slidesPerView : 5
                },
            }}
            >
                <SwiperSlide className="col-3 one flex flex-column gap-2">
                    <div className='proNews flex  '>
                        <img src={brand1} className='blog w-75' alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="col-3 one flex flex-column gap-2">
                    <div className='proNews flex  '>
                        <img src={brand2} className='blog w-75' alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="col-3 one flex flex-column gap-2">
                    <div className='proNews flex brand  '>
                        <img src={brand3} className='blog w-75' alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="col-3 one flex flex-column gap-2">
                    <div className='proNews flex  '>
                        <img src={brand4} className='blog w-75' alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="col-3 one flex flex-column gap-2">
                    <div className='proNews flex  '>
                        <img src={brand5} className='blog w-75' alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="col-3 one flex flex-column gap-2">
                    <div className='proNews flex  '>
                        <img src={brand6} className='blog w-75' alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="col-3 one flex flex-column gap-2">
                    <div className='proNews flex  '>
                        <img src={brand7} className='blog w-75' alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="col-3 one flex flex-column gap-2">
                    <div className='proNews flex  '>
                        <img src={brand8} className='blog w-75' alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="col-3 one flex flex-column gap-2">
                    <div className='proNews flex  '>
                        <img src={brand9} className='blog w-75' alt="" />
                    </div>
                </SwiperSlide>
                
                
            </Swiper>
        </div>
      
    </div>
  )
}

export default BrandLogo
