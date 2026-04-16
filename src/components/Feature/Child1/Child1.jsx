import React, { useContext } from 'react'
import pro1 from '../../../assets/images/product/product1.jpg'
import pro1Hover from '../../../assets/images/product/product1-1.jpg'
import pro2 from '../../../assets/images/product/product2.jpg'
import pro2Hover from '../../../assets/images/product/product2-1.jpg'
import pro3 from '../../../assets/images/product/product3.jpg'
import pro3Hover from '../../../assets/images/product/product3-1.jpg'
import pro4 from '../../../assets/images/product/product4.jpg'
import pro4Hover from '../../../assets/images/product/product4-1.jpg'
import pro5 from '../../../assets/images/product/product5.jpg'
import pro5Hover from '../../../assets/images/product/product5-1.jpg'
import pro7 from '../../../assets/images/product/product7.jpg'
import pro7Hover from '../../../assets/images/product/product7-1.jpg'
import {Swiper , SwiperSlide} from 'Swiper/react'
import {Autoplay , Pagination , Navigation } from 'Swiper/modules'
import Product from "../Product";
import { ApiContext } from '../../../Context/ApiContext'


function Child1() {
    const { allData } = useContext(ApiContext);
      
  return (
    <div >
        <div className="container mt-5">
            <Swiper className="row Product"
            slidesPerView={4}
            spaceBetween={20}
            modules={[Autoplay , Pagination , Navigation]}
            autoplay={{
                delay:2000,
                pauseOnMouseEnter:true
            }}
            pagination={{
                clickable:true,
                dynamicBullets:true
            }}
            navigation={{
                prevEl: '.Feature .slide-to-left ' ,
                nextEl: '.Feature .slide-to-right '
                
            }}
            loop= {true}
            breakpoints={{
                0 : {
                    slidesPerView : 1
                    ,pagination :false
                    
                },
                544 : {
                    slidesPerView : 2
                },
                768 : {
                    slidesPerView : 3
                },
                992 : {
                    slidesPerView : 4
                },
            }}
            >
                {allData?.slice(0,5).map((val,index)=>{
                    return <SwiperSlide className="col-3 one flex flex-column gap-2" key={index}>
                        <Product val={val} index={index} desc={false} />
                    </SwiperSlide>
                })}
                
                
                
            </Swiper>
        </div>
      
    </div>
  )
}

export default Child1
