import React from 'react'
import Info from './Info/Info'
import Logo from './Logo/Logo'
import Navbar from './Navbar/Navbar'

function Header() {
  return (
    <div>
      <Info/>
      <Logo/>
      <Navbar/> 
    </div>
  )
}

export default Header
