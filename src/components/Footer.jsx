import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'

export default function Footer() {
  return (
    <>
      <footer className='relative bottom-0 w-screen bg-gray h-fit mt-32'>
        <div className='w-[90%] md:w-[80%] lg:w-[70%] h-fit mx-auto flex  flex-col md:flex-row  justify-evenly  gap-12 p-10 text-center md:text-left'>

          <div className='hidden md:block'>
            <img src={Logo} alt="" className='h-[40px] w-[148px]'/>
          </div>

          <div className='flex justify-center flex-wrap md:flex-nowrap  gap-x-24 md:gap-x-12 gap-y-8 '>
            <div className='flex flex-col'>
              <p className='text-[18px] text-deep-green font-semibold'>General</p>
              <div className='text-base text-secondary-400 '>
                <Link to={'/'} className='block'>Home</Link>
                <Link to={'about'} className='block'>About</Link>
                <Link to={'menu'} className='block'>Menu</Link>
                <Link to={'/reservations'} className='block'>Reservations</Link>
                <Link to='order-online' className='block'>Order Online</Link>
                <Link to='login' className='block'>Login</Link>
              </div>
            </div>

            <div>
              <p className='text-lg text-deep-green font-semibold'>Social Media Links</p>
              <div className='text-base text-secondary-400'>
                <Link to={''} className='block'>Twitter</Link>
                <Link to={''} className='block'>WhatsApp</Link>
                <Link to={''} className='block'>Facebook</Link>
                <Link to={''} className='block'>Instagram</Link>
              </div>
            </div>

            <div className='flex flex-col'>
              <p className='text-lg text-deep-green font-semibold'>Contacts</p> 
              <div className='text-base text-secondary-400'>
                <p>Address</p>
                <p>Phone Number</p>
                <p>littlelemon@gmail.com</p>
              </div>
            </div>

            
          </div>

          <div className='md:hidden mx-auto'>
            <img src={Logo} alt="" />
          </div>
          
        </div>
      </footer>
    </>
  )
}
