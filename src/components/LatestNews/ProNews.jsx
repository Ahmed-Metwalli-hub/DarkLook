import React from 'react'
import './ProNews.css'
import { FaLink } from "react-icons/fa";



function ProNews( {img1} ) {
  return (
    <>
    <div className='border w-100 border-secondary proNewsCon'>

        <div className='proNews  '>
            <img src={img1} className='blog w-100' alt="" />
        </div>
        <div className='card-body flex  flex-column gap-2 p-3'>
            <b className='w-100 text-uppercase'>Fashions fade, style is eternal</b>
            <p className='m-0 p-0 py-1 '> Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
            <div className=' py-2 mt-3 card-body flex justify-content-between w-100 '>
                <p>0 Comments</p>
                <p className='flex gap-1'>
                   <span>
                     <FaLink />
                    </span>
                   
                    Read More 
                    
                </p>

            </div>
        </div>
        <div className='blog-date py-4'>
            <b>17</b>
            <p>Aug</p>
        </div>
    </div>
      
    </>
  )
}

export default ProNews
