import React, { useContext } from 'react'
import pro6 from '../../../assets/images/product/product4.jpg'
import pro6Hover from '../../../assets/images/product/product4-1.jpg'
import pro8 from '../../../assets/images/product/product5.jpg'
import pro8Hover from '../../../assets/images/product/product5-1.jpg'
import pro9 from '../../../assets/images/product/product2.jpg'
import pro9Hover from '../../../assets/images/product/product2-1.jpg'
import pro10 from '../../../assets/images/product/product7.jpg'
import pro10Hover from '../../../assets/images/product/product7-1.jpg'
import pro12 from '../../../assets/images/product/product9.jpg'
import pro12Hover from '../../../assets/images/product/product9-1.jpg'
import pro13 from '../../../assets/images/product/product6.jpg'
import pro13Hover from '../../../assets/images/product/product6-1.jpg'
import Stars from '../Stars'
import {Swiper , SwiperSlide} from 'Swiper/react'
import {Autoplay , Pagination , Navigation } from 'Swiper/modules'
import { FaHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import Product from '../Product';
import { ApiContext } from '../../../Context/ApiContext'


function Child3() {
            const { allData } = useContext(ApiContext);
    
  return (
    <div>
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
                    ,pagination:false
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
                {allData?.slice(7,12).map((val,index)=>{
                    return <SwiperSlide className="col-3 one flex flex-column gap-2" key={index}>
                        <Product val={val} index={index} desc={false} />
                    </SwiperSlide>
                })}
                
                
                
            </Swiper>
        </div>
      
    </div>
  )
}

export default Child3
