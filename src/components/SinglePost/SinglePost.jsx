import React, { useContext } from 'react'
import './SinglePost.css'
import { ApiContext } from '../../Context/ApiContext';
import { spcificCategory } from '../../Context/ProductJson';
import img from "../../assets/images/left1.jpg";
import { Link } from 'react-router-dom';
import blog1 from '../../assets/images/blog/blog_img_01.jpg'
import author from '../../assets/images/Author.jpg'
import com1 from '../../assets/images/tm1.jpg'
import com2 from '../../assets/images/tm2.jpg'
import com3 from '../../assets/images/tm3.jpg'
import { FaCalendarAlt } from "react-icons/fa";

function SinglePost() {
  const {
        getAllData,
        allCatigories,
        NormalProductCategory,
        ApiProductCategory,
      } = useContext(ApiContext);
  return (
    <div className='SinglePost container'>
        <div className="row  mt-5">
        <div className="col-lg-3 col-md-12 justify-content-start d-flex flex-column gap-2">
          <b className="mb-3 fs-5 border-bottom p-2 fw-bold">TOP CATEGORY</b>
          <Link
            to="/shop"
            className="text-decoration-none"
            onClick={getAllData}
          >
            All Categories
          </Link>
          {spcificCategory.map((val, index) => {
            return (
              <Link
                to="/shop"
                href="#"
                className="text-decoration-none"
                onClick={() => NormalProductCategory(index)}
                key={index}
              >
                {val.category}
              </Link>
            );
          })}
          {allCatigories.map((val, index) => {
            return (
              <Link
                to="/shop"
                href="#"
                className="text-decoration-none "
                onClick={() => ApiProductCategory(val.url)}
                key={index}
              >
                {val.name}
              </Link>
            );
          })}

          <div className=" my-5">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="col-lg-9">
          <div className="row mt-3 mb-5 ">
            <div className="col-lg-12">
              <div className="card  rounded-3 border-0">
                <div  className='w-100 '>
                  <img className='card-image m-0 p-0 w-100 rounded-3 h-100' src={blog1} alt="" />
                </div>
                <div className='card-body bg-black text-light'>
                  <b className='fs-3'>Fashions fade, style is eternal</b>
                  <p className='text-secondary mt-2 fw-bold' style={{fontSize:"14px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae provident minus similique porro assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti accusantium repellat facilis tempora ab Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae provident minus similique porro assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti accusantium repellat facilis tempora ab Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae provident minus similique porro assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti accusantium repellat facilis tempora ab Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae provident minus similique porro assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti accusantium repellat facilis tempora ab</p>
                  <p className='text-secondary position-relative px-3 mt-2 fw-bold' style={{fontSize:"15px"}}>consectetur adipiscing elit. In rutrum odio urna, vitae ultrices mi malesuada ut. Praesent lacus erat, ultricies ut risus nec, pellentesque interdum purus. In mi justo, consectetur tincidunt sapien eget, venenatis volutpat risus. Maecenas eget pretium eros. Integer tincidunt aliquet ligula in vulputate. Ut ut justo facilisis, vulputate augue vel, vestibulum tortor. Nullam varius lacus non porttitor sodales. Vivamus ultricies est vitae pharetra convallis. Sed suscipit, nisi sit amet tempus mollis, mauris ante tempor risu</p>
                  <p className='text-secondary position-relative mt-2 fw-bold' style={{fontSize:"15px"}}>etur adipisicing elit. Repudiandae provident minus similique porro assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti accusantium repellat facilis tempora ab Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae provident minus similique porro assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti accusantium repellat facilis tempora ab Lorem ipsum dolor sit amet, consectet</p>
                  <p className='text-secondary flex justify-content-start gap-1 position-relative mt-2 fw-bold' style={{fontSize:"15px"}}><FaCalendarAlt /> 11 May 2024</p>

                </div>

              </div>
            </div>
            <div className="col-12">
              <div className="row mt-2 g-2">
                    <b className="fs-5 mb-2 fw-normal">About the Author</b>
                <div className="col-1">
                  <div className='w-100'>
                  <img className='w-100' src={author} alt="" />
                  </div>
                </div>
                <div className="col-11">
                  <p className='m-0 p-0 fs-6 fw-semibold text-secondary'>Ahmed Metwalli  </p>
                  <p  style={{fontSize:"14px"}} className="text-secondary mt-2  m-0 p-0">Vivamus imperdiet ex sed lobortis luctus. Aenean posuere nulla in turluctus. Aenean posuere nulla in tur pis porttitor laoreet. Quisque finibus aliquet purus. Ut et mi eu ante interdum .</p>
                </div>
              </div>
              <div className="row mt-2 g-2 border-bottom border-secondary">
                    <b className="fs-5 mb-2 fw-normal">3 Comments </b>
                <div className="col-1">
                  <div className='w-100 flex'>
                  <img className='w-75' src={com1} alt="" />
                  </div>
                </div>
                <div className="col-11">
                  <p className='m-0 p-0 fs-6 fw-semibold text-secondary'>
                  Radley Lobortis <span style={{fontSize:'12px'}}>8 months ago</span></p>
                  <p  style={{fontSize:"14px"}} className="text-secondary my-2  m-0 p-0">Sed lobortis rpi luctus. Aenean posuere nulla in turluctus. Aenean posuere nulla in turs porttitor larpis porttitor larpis porttitor lauctus. Aenean posuere nulla in turpis porttitor laoreet.</p>
                </div>
              </div>
              <div className="row mt-2 g-2 border-bottom border-secondary">
                <div className="col-1">
                  <div className='w-100 flex'>
                  <img className='w-75' src={com2} alt="" />
                  </div>
                </div>
                <div className="col-11">
                  <p className='m-0 p-0 fs-6 fw-semibold text-secondary'>
                  Radley Lobortis <span style={{fontSize:'12px'}}>8 months ago</span></p>
                  <p  style={{fontSize:"14px"}} className="text-secondary my-2  m-0 p-0">Sed lobortis rpi luctus. Aenean posuere nulla in turluctus. Aenean posuere nulla in turs porttitor larpis porttitor larpis porttitor lauctus. Aenean posuere nulla in turpis porttitor laoreet.</p>
                </div>
              </div>
              <div className="row mt-2 g-2">
                <div className="col-1">
                  <div className='w-100 flex'>
                  <img className='w-75' src={com3} alt="" />
                  </div>
                </div>
                <div className="col-11">
                  <p className='m-0 p-0 fs-6 fw-semibold text-secondary'>Radley Lobortis <span style={{fontSize:'12px'}}>8 months ago</span></p>
                  <p  style={{fontSize:"14px"}} className="text-secondary mt-2  m-0 p-0">Sed lobortis rpi luctus. Aenean posuere nulla in turluctus. Aenean posuere nulla in turs porttitor larpis porttitor larpis porttitor lauctus. Aenean posuere nulla in turpis porttitor laoreet.</p>
                </div>
              </div>

            </div>
            <div className="col-12 mt-5">
              <b className="fs-5 mb-2 fw-normal">Leave A Comment</b>
              <div className='flex justify-content-between gap-3 my-3'>
              <input type="text" className='form-control' placeholder='Name' />
              <input type="email" className='form-control' placeholder='E-mail' />
              </div>
              <textarea placeholder='Enter You Massage' className='mb-3 form-control' rows={8}></textarea>
            </div>
          </div>
          

        </div>
      </div>
    
      
    </div>
  )
}

export default SinglePost
