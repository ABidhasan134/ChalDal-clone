import  {React, useRef, useState } from 'react'
// import '../Navbar/Navbar.css';
// importin icons
import { MdLineWeight } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { MdChangeCircle } from "react-icons/md";
import ColorToggleButton from './components/languageSwapBtn';



const Navbar = (props) => {
    // declare state
    const [popUp,setPooUp]=useState(true);
    const [isActive,setActive]=useState(true);
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    // lessing onclick for sidebar
    const handalOnclick=(e) => {
        // sidebar will show when user clicks
        if(popUp===false){
          setPooUp(!popUp);    
          // sending value to app.js file
          props.sendcell(popUp);
          // console.log('click2');            
      }
       else if(popUp===true){
            setPooUp(!popUp);
            //sending value to app.js file
            props.sendcell(popUp);
            // console.log('click');
            
        }
        // sidebar will desaper when user click ones
      else{
        console.log("click");
      }
        

    }

  return (
    // over view of navigation
    <div className='sticky top-0 z-20 flex gap-2 sm:justify-start 
    justify-between lg:gap-7 p-5 items-center bg-[#FFD670] w-full'>
        {/* div for responsness control */}
        <div className='flex items-center '>
        {/* side bar icon and heading of website */}
        
        {/* testing and clicking issu */}
        <div>
        {
          windowSize.current[0] === 600 && popUp ? <p>here</p> :
          <MdLineWeight onClick={handalOnclick} className='py-2 text-2xl h-12 w-12 lg:text-4xl hover:bg-orange-400 hover:rounded-lg'/>
        }
        </div>
        


        <h1 className='lg:text-4xl italic  lg:visible'>Chaldal</h1>
        </div>
        {/* search product input section. this section will diseper when it less then sm: size*/}
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
              <li><a><MdChangeCircle /> Change City</a></li>
            </ul>
          </div>
          {/* language swap area. this section will diseper when it less then sm: size*/}
        {/* this from material ui  */}
        <div className='sm:flex hidden sm:visible'>
          {/* when we went to display visiable than you should be flxe or grid */}
        <ColorToggleButton />
        </div>
          
        {/* login btn  */}
        <button className='btn  bg-orange-600 border-none hover:bg-orange-600 lg:text-2xl p-1 lg:px-5 text-white'>Log In</button>
        </div>
    </div>
  )
}

export default Navbar
