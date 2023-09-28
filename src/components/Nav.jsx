import React from 'react'
import Logo from '../assets/Logo.svg'
import { Link,NavLink } from 'react-router-dom'


export default function Nav() {
  return (
    <> 
        <nav className='flex items-center justify-between w-[80%] bg-[#e8e9e9] mx-auto px-[20px] py-[10px]'>
          <div>
            <NavLink>
              <img src={Logo} alt="Logo" />
            </NavLink>
            </div>
          <div>
            <ul className='flex items-center gap-4'> 
              <li><NavLink>Home</NavLink></li>
              <li><NavLink>About</NavLink></li>
              <li><NavLink>Menu</NavLink></li>
              <li><NavLink>Reservations</NavLink></li>
              <li><NavLink>Order Online</NavLink></li>
              <li><NavLink>Log In</NavLink></li>
            </ul>
          </div>
          <div>
            <img src="" alt="" />
          </div>
          
        </nav>
        
    </>
  )
}
