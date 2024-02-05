import React from 'react'

import Bannar from "../../img/landingBanner.png"
import { IoSearchSharp } from 'react-icons/io5'
import Poster from '../../img/imageBanner.png'


const HomeAddBg = () => {
  return (
    // adding background of bannar by tailwind hero
    <div className="hero sm:min-h-[450px] min-h-[250px] ml-0 pl-0 " style={{backgroundImage:   `url(${Bannar})`}}>
        {/* <div className="hero-overlay bg-opacity-0"></div> */}
            <div className=" text-white flex sm:justify-between items-center justify-center w-full px-3">

              <div className='flex-1 items-center '>
                {/* headding of bannar */}
                <h1 className='flex sm:mr-12 p-4  sm:text-3xl text-3xl font-bold text-black'>Growcery Deliverad at your <br /> DoorStap</h1>
                {/* search bar  */}
                <div className='flex items-center sm:mr-12 px-4 '>
                <input  type="text" placeholder="Type here" class="input input-bordered flex-1" />
                <IoSearchSharp  className='text-4xl relative -left-9 pl-0 text-black'/>
                </div>
              </div>

              {/* adding poster */}
              <figure className='sm:flex hidden sm:visible'>
                <img src={Poster} alt="poster up to the bannar" />
              </figure>
          
            </div>
    </div>
  )
}

export default HomeAddBg
