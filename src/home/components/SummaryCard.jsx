import React from 'react'

import { CiShop } from "react-icons/ci";
import { FcMoneyTransfer } from "react-icons/fc";
import { MdDeliveryDining } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";



const SummaryCard = () => {
  return (
    <div>
      
      <section className='grid grid-cols-2 sm:grid-cols-4 gap-2 m-6'>
      {/* card 1 */}
      <div class="card  w-auto bg-base-100 shadow-xl border-2
      flex-row gap-2 justify-center items-center h-36">
        <CiShop className='text-2xl sm:text-4xl'/>
        <div className='sm:text-2xl'>
          <span className='text-red-500 font-bold'> +15000 </span>to shop from
        </div>
      </div>
      {/* card 2 */}
      <div class="card w-auto bg-base-100 shadow-xl border-2
      flex-row gap-2 justify-center items-center h-36">
        <FcMoneyTransfer className='text-2xl sm:text-4xl'/>
        <div className='sm:text-2xl'> pay
          <span className='text-red-500 font-bold'> after </span>reciveing product
        </div>
      </div>
      {/* card 3 */}
      <div class="card w-auto bg-base-100 shadow-xl border-2 pl-3 sm:pl-0
      flex-row gap-2 justify-center items-center h-36">
        <MdDeliveryDining className='text-3xl  sm:text-4xl'/>
        <div className='sm:text-2xl'> get your delivery within
          <span className='text-red-500 font-bold'> 1 houre </span>
        </div>
      </div>
      {/* card 4 */}
      <div class="card w-auto bg-base-100 shadow-xl border-2
      flex-row gap-2 justify-center items-center h-36">
        <FaMoneyBillTrendUp className='text-2xl sm:text-4xl'/>
        <div className='sm:text-2xl'> get offer 
          <span className='text-red-500 font-bold'> save money </span>
        </div>
      </div>
      </section>
    </div>
  )
}

export default SummaryCard
