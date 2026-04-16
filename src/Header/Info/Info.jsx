import React, { useRef } from 'react'
import { IoChevronDownSharp } from "react-icons/io5";
import './Info.css'

function Info() {
  const drobDown_1 = useRef(null)
  const drobDown_2 = useRef(null)
  const openDrobdown = (state)=>{
    if (state === 'one') {
      drobDown_1.current.classList.toggle('open')
      drobDown_2.current.classList.remove('open')
    }else{
      drobDown_2.current.classList.toggle('open')
      drobDown_1.current.classList.remove('open')
      
    }

  }
  return (
    <>
    <div className="info  border-bottom border-secondary">

      <div className=" container flex justify-content-between py-2    ">
          <p className='pt-1 date m-0'>Days a week from 9:00 am to 7:00 pm</p>
          <div className='right flex gap-4'>
              <div>My Account</div>
              <div>
                <div onClick={()=> openDrobdown('one') }>Language <IoChevronDownSharp /></div> 
                <div ref={drobDown_1} className="one m-0 drobDown position-absolute">
                  <p className=' m-0'>English</p>
                  <p className=' m-0'>Arabic</p>
                </div>
              </div>


              <div>

                <div onClick={()=> openDrobdown('two') }>Currency <IoChevronDownSharp /></div>
                  <div ref={drobDown_2} className="one m-0  drobDown position-absolute">
                    <p className=' m-0 '>€ Euro</p>
                    <p className=' m-0 '>£ Pound Sterling</p>
                    <p className=' m-0'>$ US Dollar</p>
                  </div>
              </div>

          </div>
      </div>
        
    </div>
    </>
  ) 
}

export default Info
