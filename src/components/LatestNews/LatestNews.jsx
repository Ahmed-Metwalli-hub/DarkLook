import React from 'react'
import './LatestNews.css'
import SubTitle from '../SubTitle'
import {Swiper , SwiperSlide} from 'swiper/react'
import {Autoplay , Pagination , Navigation } from 'swiper/modules'
import blog1 from '../../assets/images/blog/blog_img_01.jpg'
import blog2 from '../../assets/images/blog/blog_img_02.jpg'
import blog3 from '../../assets/images/blog/blog_img_03.jpg'
import blog4 from '../../assets/images/blog/blog_img_04.jpg'
import blog5 from '../../assets/images/blog/blog_img_05.jpg'
import blog6 from '../../assets/images/blog/blog_img_06.jpg'
import blog7 from '../../assets/images/blog/blog_img_07.jpg'
import blog8 from '../../assets/images/blog/blog_img_08.jpg'
import ProNews from './ProNews'


function LatestNews() {
  return (
    <div className='LatestNews mt-5'>
        <SubTitle name = 'LATEST NEWS' />
        <div className="container mt-4">
            <Swiper className="row "
            slidesPerView={2}
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
            loop= {false}
            breakpoints={{
                0 : {
                    slidesPerView : 1
                },
                544 : {
                    slidesPerView : 2
                },
                768 : {
                    slidesPerView : 2
                },
                992 : {
                    slidesPerView : 2
                },
            }}
            >
                <SwiperSlide className=" one">
                    <ProNews img1={blog1}/>
                </SwiperSlide>
                <SwiperSlide className=" one">
                    <ProNews img1={blog2}/>
                </SwiperSlide>
                <SwiperSlide className=" one">
                    <ProNews img1={blog3}  />
                </SwiperSlide>
                <SwiperSlide className=" one">
                    <ProNews img1={blog4} />
                </SwiperSlide>
                <SwiperSlide className=" one">
                    <ProNews img1={blog5} />
                </SwiperSlide>
                <SwiperSlide className=" one">
                    <ProNews img1={blog6} />
                </SwiperSlide>
                <SwiperSlide className=" one">
                    <ProNews img1={blog7} />
                </SwiperSlide>
                <SwiperSlide className=" one">
                    <ProNews img1={blog8} />
                </SwiperSlide>
                
                
            </Swiper>
        </div>
      
    </div>
  )
}

export default LatestNews
