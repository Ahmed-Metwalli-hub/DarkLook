import React from 'react'
import './Contact.css'
import { IoIosCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import img1 from "../../assets/images/left1.jpg"

function Contact() {
  return (
    <div className='Contact container my-5'>
        <div className="row">
          <div className="col-lg-3 col-md-12">
            <b>TOP CATEGORY</b>
            <a className='mt-4'>Category-1</a>
            <a>Category-2</a>
            <a>Category-3</a>
            <a>Category-4</a>
            <a>Category-5</a>
            <a>Category-6</a>
            <a>Category-7</a>
            <a>Category-8</a>
            <a>Category-9</a>
            <a style={{border:'none'}}>Category-10</a>
          </div>
          <div className="col-lg-3 col-md-12 mt-3">
            <div>
              <b>Our Location</b>
              <p className='m-0 p-0'>Office address <br />
                124,Lorem Ipsum has been text ever since the 1500</p>
              <p className='m-0 p-0'><IoIosCall /> +91-9987-654-321</p>
            </div>
            <div>
              <b>Careers</b>
              <p className='m-0 p-0'>dummy text ever since the 1500s, simply dummy text of the typesetting industry.</p>
              <p className='m-0 p-0'><CiMail /> careers@yourdomain.com</p>
            </div>
            <div>
              <b>Say Hello</b>
              <p className='m-0 p-0'>simply dummy text of the printing and typesetting industry.,</p>
              <p className='m-0 p-0'><CiMail /> info@yourdomailname.com</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <form action="" className='flex gap-4 flex-column'>
              <input className='form-control rounded-0 w-100 py-2' type="text" placeholder='Name' />
              <input className='form-control rounded-0 w-100 py-2' type="email" placeholder='Email adress' />
              <input className='form-control rounded-0 w-100 py-2' type="number" placeholder='Phone number' />
              <input className='form-control rounded-0 w-100 py-2'  type="text" placeholder='Subject' />
              <textarea className='form-control rounded-0 w-100 py-2'   placeholder="Enter Your Message"  rows="8"></textarea>
            </form>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-3">
            <div>
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="col-lg-9">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13739.598817028616!2d31.51025005!3d30.580376599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7f044ed84e6db%3A0xc970f35c23cfc0a3!2z2KfZhNiy2YLYp9iy2YrZgtiMINin2YTYrdix2YrYsdmK2Iwg2YLYs9mFINij2YjZhCDYp9mE2LLZgtin2LLZitmC2Iwg2YXYrdin2YHYuNipINin2YTYtNix2YLZitip!5e0!3m2!1sar!2seg!4v1771333492376!5m2!1sar!2seg" className='w-100' height={400} frameborder="0"></iframe>
          </div>
        </div>

      
    </div>
  )
}

export default Contact
