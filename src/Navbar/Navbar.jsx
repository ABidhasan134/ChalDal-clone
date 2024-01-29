import React, { useState } from 'react'
// import Sidebar from '../sidebar/sidebar';
// import Home from '../home/home';
import { MdLineWeight } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import '../Navbar/Navbar.css'
import { FaChevronDown } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { MdChangeCircle } from "react-icons/md";



const Navbar = (props) => {
  // const {reciveCell}=props;
    const [popUp,setPooUp]=useState(true);
    const handalOnclick=(e) => {
        
        if(popUp===true){
            setPooUp(false);
            // console.log('click');
            //sending value to app.js file
            props.sendcell(popUp);
        }
        if(popUp===false){
            setPooUp(true);    
            // sending value to app.js file
            props.sendcell(popUp);
            // console.log('click2');
        }
        else{
          console.log("click");
        }

    }
    // const getValue=(e)=>{
    //  const number= e.target.value();
    //  console.log(number);
    // }
  return (
    <div className='flex gap-2 sm:justify-start justify-between lg:gap-7 p-5 items-center bg-[#FFD670] w-full'>
        <div className='flex items-center '>
        <MdLineWeight onClick={handalOnclick} className='text-2xl lg:text-4xl'/>
        <h1 className='lg:text-4xl italic  lg:visible'>Chaldal</h1>
        </div>
        {/* search product input section */}
        <div className='sm:flex flex-1 items-center pl-0 hidden sm:visible '>
        <input  type="text" placeholder="Type here" class="input input-bordered flex-1" />
        <IoSearchSharp  className='text-4xl relative -left-9 pl-0'/>
        </div>
        {/* location dropdown menue */}
        <div className='flex gap-2'>
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn m-1 bg-transparent border-none">Dhaka 
          <span ><FaChevronDown /></span></div>
            <ul tabindex="0" class="dropdown-content z-[1] menu pl-0 p-2 shadow bg-base-100 rounded-box w-60">
              <li><a><FaLocationCrosshairs/> Use my current location</a></li>
              <li><a><MdChangeCircle/> Change City</a></li>
            </ul>
          </div>
          {/* language swap area */}
        <div className='lg:flex gap-1 bg-white p-1 my-0 py-0 rounded-md hidden sm:visible '>
            <button  value="1" className='active:btn-colors'>eng</button>
            <button>ban</button>
        </div>
        <button className='btn  bg-orange-600 border-none hover:bg-orange-600 lg:text-2xl p-1 lg:px-5 text-white'>Log In</button>
        </div>
    </div>
  )
}

export default Navbar
