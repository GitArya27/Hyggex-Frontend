import Footer from '../components/LandingPage/Footer/Footer'
import Navbar from '../components/LandingPage/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import React from 'react'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout