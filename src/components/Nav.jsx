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
        <nav className={`flex items-center justify-between w-screen mx-auto py-[10px] px-[5%] md:px-[10%] lg:px-[15%] z-30 bg-white fixed border-b-deep-green border-b-2`}>
          <div className='relative top-0 z-30'>
            <Link to={'/'} onClick={() => isMenuOpen ? toggleMenu() : ''}>
              <img src={Logo} alt="Logo" />
            </Link>
            </div>
        <div className={`w-[100vw] md:w-fit absolute md:static left-0 flex o z-10 justify-center bg-white py-5 md:py-0 duration-300 md:opacity-100
        active:font-bold text-deep-green  ${isMenuOpen ? 'top-[61.5px] opacity-100' : 'top-[-500px] opacity-0'}`}>
            <ul className='flex flex-col md:flex-row items-center  justify-between gap-7 md:h-fit md:gap-4 lg:gap-6'> 
              <li onClick={toggleMenu}>
                <Link to={'/'} className={'active:bg-secondary-300 hover:font-bold'}>Home</Link>
              </li> 
              <li onClick={toggleMenu}>
                <NavLink to={'/about'} className={'hover:text-secondary-300 hover:font-bold'}>About</NavLink>
              </li>
              <li onClick={toggleMenu}>
                <NavLink to='/menu' className={'hover:text-deep-green hover:font-bold'}>Menu</NavLink>
              </li>
              <li onClick={toggleMenu}>
                <NavLink to={'/reservations'} className={'hover:text-secondary-300 active:font-bold'}>Reservations</NavLink>
              </li>
              <li onClick={toggleMenu}>
                <NavLink to={'order-online'} className={'hover:text-secondary-300 hover:font-bold'}>Order Online</NavLink>
              </li>
              <li onClick={toggleMenu}>
                <NavLink to={'login'} className={'hover:text-secondary-300 hover:font-bold '}>Log In</NavLink>
              </li>
            </ul>
          </div>
          <div className='md:hidden' onClick={toggleMenu}>
            <img src={!isMenuOpen ? Hamburger : Close} alt="" className='duration-500' />
          </div>
           
        </nav>
        
    </>     
  )
}
