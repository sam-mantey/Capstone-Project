import React, { useState } from 'react'
import Logo from '../assets/Logo.svg'
import { Link,NavLink } from 'react-router-dom'
import Hamburger from '../assets/hamburger-menu.svg'
import Close from '../assets/close.svg'


export default function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
    console.log(isMenuOpen)
  }
  return (
    <> 
        <nav className='flex items-center justify-between w-[100vw] md:max-w-[90vw]mx-auto my-[10px] px-[16px]'>
          <div>
            <NavLink to={'/'}>
              <img src={Logo} alt="Logo" />
            </NavLink>
            </div>
        <div className={`w-[100vw] md:w-fit absolute md:static left-0 flex justify-center bg-white py-5 md:py-0 duration-500 ${isMenuOpen ? 'top-[60px]' : 'top-[-100%]'} z-10`}>
            <ul className='flex flex-col md:flex-row items-center  justify-between gap-7 md:h-fit md:gap-4 lg:gap-6'> 
              <li onClick={toggleMenu}>
                <NavLink to={'/'} className={'active:text-white'}>Home</NavLink>
              </li> 
              <li onClick={toggleMenu}>
                <NavLink to={'/about'}>About</NavLink>
              </li>
              <li onClick={toggleMenu}>
                <NavLink to='/menu'>Menu</NavLink>
              </li>
              <li onClick={toggleMenu}>
                <NavLink to={'/reservations'}>Reservations</NavLink>
              </li>
              <li onClick={toggleMenu}>
                <NavLink to={'order-online'}>Order Online</NavLink>
              </li>
              <li onClick={toggleMenu}>
                <NavLink to={'login'}>Log In</NavLink>
              </li>
            </ul>
          </div>
          <div className='md:hidden'>
            <img src={!isMenuOpen ? Hamburger : Close} alt="" className='duration-500' onClick={toggleMenu}/>
          </div>
          
        </nav>
        
    </>
  )
}
