import { Container } from '@mui/material'
import React from 'react'
import { Helmet } from 'react-helmet'
import HomeAddBg from './components/homeAddBg'
import SummaryCard from './components/SummaryCard'
import PopularItems from './components/PopularItems'

const Home = () => {
  return (
    <div className='bg-white ml-0 pl-0 overflow-auto w-full'>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Home component</title>
                <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <HomeAddBg/>
        <SummaryCard/>
        <PopularItems/>
    </div>
  )
}

export default Home
