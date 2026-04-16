import React, { useContext } from 'react'
import './Blog.css'
import { ApiContext } from '../../Context/ApiContext';
import { spcificCategory } from '../../Context/ProductJson';
import img from "../../assets/images/left1.jpg";
import { Link } from 'react-router-dom';
import ProNews from '../LatestNews/ProNews';
import blog1 from '../../assets/images/blog/blog_img_01.jpg'
import blog2 from '../../assets/images/blog/blog_img_02.jpg'
import blog3 from '../../assets/images/blog/blog_img_03.jpg'
import blog4 from '../../assets/images/blog/blog_img_04.jpg'
import blog5 from '../../assets/images/blog/blog_img_05.jpg'
import blog6 from '../../assets/images/blog/blog_img_06.jpg'
import blog7 from '../../assets/images/blog/blog_img_07.jpg'
import blog8 from '../../assets/images/blog/blog_img_08.jpg'

function Blog() {
  const {
      getAllData,
      allCatigories,
      NormalProductCategory,
      ApiProductCategory,
    } = useContext(ApiContext);
  return (
    <div className='Blog container'>
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
          <div className="row mt-4 mb-5 g-3">
            <div className="col-lg-6 col-md-12">
              <ProNews img1={blog1}/>
            </div>
            <div className="col-lg-6 col-md-12">
              <ProNews img1={blog2}/>
            </div>
            <div className="col-lg-6 col-md-12">
              <ProNews img1={blog3}/>
            </div>
            <div className="col-lg-6 col-md-12">
              <ProNews img1={blog4}/>
            </div>
            <div className="col-lg-6 col-md-12">
              <ProNews img1={blog5}/>
            </div>
            <div className="col-lg-6 col-md-12">
              <ProNews img1={blog6}/>
            </div>
            <div className="col-lg-6 col-md-12">
              <ProNews img1={blog7}/>
            </div>
            <div className="col-lg-6 col-md-12">
              <ProNews img1={blog8}/>
            </div>
          </div>
        </div>
    </div>
      
    </div>
  )
}

export default Blog
