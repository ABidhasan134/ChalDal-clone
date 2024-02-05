import React from 'react'

import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const PopularItems = () => {
  return (
    <div className='grid '>
      <section className='flex justify-between'>
        <h1>Popular Items</h1>
        <div className='flex justify-between'>
            <h1 className='text-red-400'>view all</h1>
            <div>
            <FaAngleLeft/>
            <FaAngleRight/>
            </div>
        </div>
      </section>
    </div>
  )
}

export default PopularItems
