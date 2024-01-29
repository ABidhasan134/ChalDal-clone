import React, { useState } from 'react'
import Home from './home/home'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/footer'
import Pharma from './home/pharma'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Sidebar from './sidebar/sidebar'

const App = () => {
  const [cellNav,setcelNav]=useState(true);
  const reciveCell=(cell)=>{
    setcelNav(cell);
    console.log(cell);
  }
    const LayOut=()=>{
        return(
            <div >
                < Navbar sendcell={reciveCell}/>

                <div className='flex gap-12'>
                    {
                      cellNav?<Sidebar className="w-[30%]"/>:null
                    }
                    <Outlet className="w-[70%]" />
                </div>
                <Footer/>
            </div>
                )
    }
    const router=createBrowserRouter([
      {
        path:'/',
        element:<LayOut/>,
        children:[
          {
            path:'/',
            element:<Home/>
          },
          {
            path:'/pharma',
            element:<Pharma/>

          },
        ]
      }
    ])
  return <RouterProvider router={router}/> 
}

export default App
