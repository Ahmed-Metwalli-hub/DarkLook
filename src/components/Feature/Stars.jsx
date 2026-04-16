import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
function Stars() {
  return (
    <div className='stars'>
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStarHalfAlt />
      <CiStar />
    </div>
  )
}

export default Stars
