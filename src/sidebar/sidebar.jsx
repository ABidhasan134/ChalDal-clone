import React from 'react'

import {Link} from 'react-router-dom'
import { FiHelpCircle } from "react-icons/fi";
import { IoIosText } from "react-icons/io";
import Togglepage from '../Navbar/components/pageSwap';



const Sidebar = () => {
  return (
    <div className='m-0 '>
      {/* // side bar manu list  */}
        <div className=' pl-2 z-10 h-[780px] overflow-scroll border-2 border-pink-400'>
        {/* top 3 page link */}
         <Togglepage className='flex lg:gap-5 p-1 justify-center items-cente'/>
          <hr className='my-1 w-full border-black' />
          {/* offer section or clube section */}
          <section>
              
              <ul class="menu hover:bg-none rounded-box">
                  <Link to="/offer">Offer</Link> 
                  <Link to="/offer">Egg clube</Link> 
                  <Link to="/offer">Daily Deals</Link> 
                <hr className='my-1 w-full'/>
                {/* food item drop down  */}
                  <li className='relative -left-4 '>
                    {/* multipul list opening drop-down menu */}
                    <details open >
                      <summary className='hover:bg-gradient-to-r from-white to-slate-300'>Food</summary>
                      <ul>
                        
                        <li >
                          <details open>
                            <summary className='hover:bg-gradient-to-r from-white to-slate-300' >Fruits and vagetable</summary>
                            <ul>
                              <li ><Link to="/offer" className='hover:bg-gradient-to-r from-white to-slate-300'>Fresh Fruits</Link> </li>
                              <li ><Link to="/offer" className='hover:bg-gradient-to-r from-white to-slate-300'>Fresh vagetable</Link> </li>
                            </ul>
                          </details>
                        </li>
                      </ul>
                    </details>
                  </li>
                  {/* cleaning center */}
                  <li className='relative -left-4'>
                    <details open>
                    <summary className='hover:bg-gradient-to-r from-white to-slate-300'>Cleaning Supplies</summary>
                    <ul>
                      {/* <li className='hover:bg-gradient-to-r from-white to-slate-300'> Diswasher Supplies</li> */}
                      <li className='hover:bg-gradient-to-r from-white to-slate-300'> <Link>Diswasher Supplies</Link></li>
                      <li className='hover:bg-gradient-to-r from-white to-slate-300'> <Link>Laundry</Link></li>
                      <li className='hover:bg-gradient-to-r from-white to-slate-300'> <Link>Tolite Cleaner</Link></li>
                      <li className='hover:bg-gradient-to-r from-white to-slate-300'> <Link>Napkins & preaper prouduct</Link></li>
                      <li className='hover:bg-gradient-to-r from-white to-slate-300'> <Link>pase control</Link></li>
                    </ul>
                    </details>
                  </li>
                  {/* parsonal cares */}
                  <li className='relative -left-4 '>
                    <details open >
                      <summary className='hover:bg-gradient-to-r from-white to-slate-300'>pearsonal cares</summary>
                      <ul>
                        
                        <li >
                          <details open>
                            {/* woman care's */}
                            <summary className='hover:bg-gradient-to-r from-white to-slate-300' >woman's cares</summary>
                            <ul>
                              <li ><Link to="/offer" className='hover:bg-gradient-to-r from-white to-slate-300'>woman shops</Link> </li>
                              <li ><Link to="/offer" className='hover:bg-gradient-to-r from-white to-slate-300'>Hair care's</Link> </li>
                            </ul>
                          
                          </details>
                        </li>
                        {/* man care's */}
                        <li >
                          <details open>
                            <summary className='hover:bg-gradient-to-r from-white to-slate-300' >Man's cares</summary>
                            <ul>
                              <li ><Link to="/offer" className='hover:bg-gradient-to-r from-white to-slate-300'>man shops</Link> </li>
                              <li ><Link to="/offer" className='hover:bg-gradient-to-r from-white to-slate-300'>Man perfum</Link> </li>
                            </ul>
                          
                          </details>
                        </li>
                      </ul>
                    </details>
                  </li>
                    {/* health and wellness */}
                    <li className='relative -left-4'>
                    <details open>
                    <summary className='hover:bg-gradient-to-r from-white to-slate-300'>Health and welness</summary>
                    <ul>
                      {/* <li className='hover:bg-gradient-to-r from-white to-slate-300'> Diswasher Supplies</li> */}
                      <li className='hover:bg-gradient-to-r from-white to-slate-300'> <Link>keto food</Link></li>
                      <li className='hover:bg-gradient-to-r from-white to-slate-300'> <Link>Anti epsic</Link></li>
                      <li className='hover:bg-gradient-to-r from-white to-slate-300'> <Link>Food supliment</Link></li>
                      <li className='hover:bg-gradient-to-r from-white to-slate-300'> <Link>Family palaning</Link></li>
                      <li className='hover:bg-gradient-to-r from-white to-slate-300'> <Link>Adult diapers</Link></li>
                    </ul>
                    </details>
                  </li>
                  {/* Baby's cares */}
                  <li className='relative -left-4 '>
                    <details open >
                      <summary className='hover:bg-gradient-to-r from-white to-slate-300'>Baby's cares</summary>
                      <ul>
                        {/* diaper list */}
                        <li >
                          <details open>
                            <summary className='hover:bg-gradient-to-r from-white to-slate-300' >Diaper's</summary>
                            <ul>
                              <li ><Link to="/offer" className='hover:bg-gradient-to-r from-white to-slate-300'>Medium's (1-13)</Link> </li>
                              <li ><Link to="/offer" className='hover:bg-gradient-to-r from-white to-slate-300'>Large Size</Link> </li>
                            </ul>
                          </details>
                        </li>
                        {/* baby food list */}
                        <li >
                          <details open>
                            <summary className='hover:bg-gradient-to-r from-white to-slate-300' >Baby food</summary>
                            <ul>
                              <li ><Link to="/offer" className='hover:bg-gradient-to-r from-white to-slate-300'>Milk, juice & Drink</Link> </li>
                              <li ><Link to="/offer" className='hover:bg-gradient-to-r from-white to-slate-300'>Formula</Link> </li>
                            </ul>
                          </details>
                        </li>
                      </ul>
                    </details>
                  </li>
                  {/* home and kitchen */}
                  <li className='relative -left-4'>
                    <details open>
                    <summary className='hover:bg-gradient-to-r from-white to-slate-300'>Home and kitchen</summary>
                    <ul>
                    
                      <li className='hover:bg-gradient-to-r from-white to-slate-300'> <Link>Kitchen Accessorices</Link></li>
                      <li className='hover:bg-gradient-to-r from-white to-slate-300'> <Link>Kitchen Applince</Link></li>
                      <li className='hover:bg-gradient-to-r from-white to-slate-300'> <Link>Tools and Hardware</Link></li>
                      <li className='hover:bg-gradient-to-r from-white to-slate-300'> <Link>Box</Link></li>
                      <li className='hover:bg-gradient-to-r from-white to-slate-300'> <Link>Basket</Link></li>
                    </ul>
                    </details>
                  </li>
                  {/* statinory and office */}
                  <li className='relative -left-4 '>
                    {/* multipul list opening drop-down menu */}
                    <details open >
                      <summary className='hover:bg-gradient-to-r from-white to-slate-300'>Statinory and offic</summary>
                      <ul>
                        
                        <li >
                          <details open>
                            <summary className='hover:bg-gradient-to-r from-white to-slate-300' >Office Electonice</summary>
                            <ul>
                              <li ><Link to="/offer" className='hover:bg-gradient-to-r from-white to-slate-300'>Calculator</Link> </li>
                              <li ><Link to="/offer" className='hover:bg-gradient-to-r from-white to-slate-300'>Battery's</Link> </li>
                            </ul>
                          </details>
                        </li>
                      </ul>
                      {/* paper supplies */}
                      <ul>
                        <li >
                          <details open>
                            <summary className='hover:bg-gradient-to-r from-white to-slate-300' >paper supplies</summary>
                            <ul>
                              <li ><Link to="/offer" className='hover:bg-gradient-to-r from-white to-slate-300'>Printing papar</Link> </li>
                              <li ><Link to="/offer" className='hover:bg-gradient-to-r from-white to-slate-300'>card and enveloves</Link> </li>
                            </ul>
                          </details>
                        </li>
                      </ul>
                    </details>
                  </li>
                  {/* pat care's */}
                  <li className='relative -left-4'>
                    <details open>
                    <summary className='hover:bg-gradient-to-r from-white to-slate-300'>Pat care's</summary>
                      <ul>
                        <li className='hover:bg-gradient-to-r from-white to-slate-300'> <Link>cat food</Link></li>
                        <li className='hover:bg-gradient-to-r from-white to-slate-300'> <Link>cat litters</Link></li>
                        <li className='hover:bg-gradient-to-r from-white to-slate-300'> <Link>kitten Food</Link></li>
                        <li className='hover:bg-gradient-to-r from-white to-slate-300'> <Link>Dog food</Link></li>
                        <li className='hover:bg-gradient-to-r from-white to-slate-300'> <Link>Brid and other pat food</Link></li>
                      </ul>
                    </details>
                  </li>
                  {/* toy and sports */}
                  <Link to="/offer" className='hover:bg-gradient-to-r from-white to-slate-300 py-2 rounded-lg'>Offer</Link> 
                  {/* main ul fnish */}
              </ul> 
          </section>
      </div>
      {/* help center */}
        <div class="flex items-center justify-between">
            <Link class="flex items-center px-5 py-2 gap-2"> <FiHelpCircle className='text-purple-500'/><span >Help</span></Link>
            <div className='h-10 w-[1px] bg-gray-300'></div>
            <Link class="flex items-center gap-2 px-5 py-2"><IoIosText className='text-purple-500'/><span> File a compline</span></Link>  
      </div>

    </div>
  )
}
 
export default Sidebar
