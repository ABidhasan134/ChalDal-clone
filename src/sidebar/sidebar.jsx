import React from 'react'

import {Link} from 'react-router-dom'
import { MdLocalGroceryStore } from "react-icons/md";
import { GiDoctorFace } from "react-icons/gi";
import { FaCookie } from "react-icons/fa";



const Sidebar = () => {
  return (
    <div>
        <header className='flex gap-5 '>
          <Link to='/'> <span><MdLocalGroceryStore/></span>Grocery</Link>
          <Link to='/pharma'> <span><GiDoctorFace /></span>Pharmecy</Link>
          <Link to='/pharma'> <span><FaCookie /></span>Coockup</Link>
        </header>
    </div>
  )
}

export default Sidebar
