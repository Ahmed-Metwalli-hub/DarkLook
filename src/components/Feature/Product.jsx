import React, { useContext } from 'react'
import Stars from './Stars'
import { FaHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';



function Product( {val, desc , index} ) {
    const navigate = useNavigate();
     const goToSinglePro = ()=>{
        navigate(`/shop/singlepropage/${index}`)
     }
     const { addToCart , addToWishlist } = useContext(CartContext);
  return (
    <>
        <div onClick={goToSinglePro} className=' flex '>
            <img src={val?.img || val?.thumbnail} className='' alt="" />
            <img src={val?.images[0]} className='' alt="" />
        </div>
        <div className='card-body flex  flex-column gap-2'>
            <p className='m-0 p-0'>{val?.title}</p>
            <div className="stars">
                <Stars/>
            </div>
            <strong>${val?.price}</strong>
            {desc ?
            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestias, laudantium cumque odit incidunt eligendi ad dolorem aliquid dicta laboriosam facere optio totam? Repudiandae, distinctio nisi? Vitae quasi fugit esse.</p> 
            : ''
        }
        </div>
        <div className='process flex'>
            <div onClick={() => addToWishlist(val)} className='flex'><FaHeart /></div>
            <div onClick={() => addToCart(val)} className='flex'><FaCartArrowDown /></div>

        </div>
      
    </>
  )
}

export default Product
