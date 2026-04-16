import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";

import { IoIosArrowForward } from "react-icons/io";

function SubTitle({showLinks , name ,num}) {
     const ul = useRef(null)
        const activate = (e)=>{
         let allLinks = ul.current.querySelectorAll('li a')
         allLinks.forEach (el => el.classList.remove('active'))
         e.target.classList.add('active')
        }
  return (
    <div className='Feature container mt-5 border-bottom border-light posision-relative'>
        <div className='flex justify-content-between py-2 '>
          <div className='fs-5 fw-bold text-uppercase '>{name}</div>
          <div className='flex gap-5'>
            { showLinks?
            <ul ref={ul} className='flex m-0 gap-5 '>
              <li style={{listStyle:'none'}}>
                <Link   onClick={activate}  className='text-decoration-none text-light active' to="">New Arrivals</Link  >
              </li>
              <li style={{listStyle:'none'}}>
                <Link  onClick={activate} className='text-decoration-none text-light' to="child-2">Best Sellers</Link>
              </li>
              <li style={{listStyle:'none'}}>
                <Link onClick={activate} className='text-decoration-none text-light'  to="child-3">Featured</Link>
              </li>
            </ul>
            : ''
            }
            <div className='flex gap-3 fs-5'>
              <div className='w-25 slide-icon slide-to-left'><IoIosArrowBack /></div>
              <div className='w-25 slide-icon slide-to-right'><IoIosArrowForward /></div>
            </div>
          </div>
        </div>
        
    </div> 
  )
}

export default SubTitle
