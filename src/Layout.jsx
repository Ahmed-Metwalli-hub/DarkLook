import React from 'react'
import Header from './Header/Header'
import Home from './components/Home/Home'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function Layout() {
  return (
    <main>
        <Header/>
        <Outlet/>
        <Footer/>
      
    </main>
  )
}

export default Layout
