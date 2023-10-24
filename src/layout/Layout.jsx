import React from 'react'
import Navbar from '../components/LandingPage/Navbar/Navbar'
import Footer from '../components/LandingPage/Footer/Footer'
import { Outlet } from 'react-router-dom'
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