import Lottie from 'lottie-react'
import React from 'react'
import errorPage from '../src/lottiFile/404page.json'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='w-100 vh-100 flex flex-column gap-0'>
        <div className='w-50 vh-75 flex flex-column gap-1'>
            <Lottie className='w-75 h-75' animationData={errorPage} loop={true} />
            <p className='fs-5 m-0 p-0 fw-bold'>Page Not Found</p>
        </div>
        <Link to='/' replace={true} className='btn btn-primary m-0'>Go Home</Link>
    </div>
  )
}

export default NotFound