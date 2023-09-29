import React from 'react'
import RestaurantPhoto from '../assets/restauranfood.jpg'
import Bruchetta from '../assets/bruchetta.jpg'
import LemonDessert from '../assets/lemon-dessert.jpg'
import GreekSalad from '../assets/greek-salad.jpg'
import Delivery from '../assets/delivery.svg'
import { NavLink } from 'react-router-dom'


export default function Home() {
  return (
    <>
      <main className='w-[100vw] bg-deep-green h-[60vh] flex justify-center' >
        <div className='justify-self-center flex justify-center items-center h-full w-[90%] md:w-[85%]mx-auto'>
          <div className='h-fit max-w-[400px] md: md:w-[50%] relative mx-auto  flex flex-col gap-5'>
            <header >
              <h1 className='font-bold text-yellow text-2xl md:text-[50px] pb-3'>Little Lemon</h1>
              <p className='text-xl font-medium text-white  md:text-[35px]'>Chicago</p>
            </header>
              
            <p className='text-base font-medium text-white md:text-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              
            <button className='bg-yellow px-[16px] md:px-[32px]  py-[8px] md:py-[16px] rounded-2xl font-semibold w-fit text-secondary-400 md:text-[20px]'>
              <NavLink to='reservations'>
                Reserve a Table
              </NavLink>
            </button>
          </div>

          <div className='hidden md:block bg-white w-[50%]'>
            <img src={RestaurantPhoto} alt="Restaurant photo" className='absolute w-[40%] lg:w-[50% ] xl:w-[35%] h-[65%] lg:h-[60%] xl:h-[55%] right-[7%] xl:right-[10%] top-[15%] rounded-[56px]'/>
          </div>
        </div>
        
      </main>

      <section className='mt-[16px] w-[90%] mx-auto'>
        <div className='inline-flex w-full justify-between items-center'>
          <p className='text-[18px]'>This weeks specials!</p>
          <button className='text-[14px] md:text-[20px] bg-yellow py-[8px] md:py-[16px] px-[16px] md:px-[32px] text-deep-green rounded-2xl font-semibold'>Online Menu</button>
        </div>

        <div className='mt-[52px] w-[90%] flex justify-center mx-auto flex-wrap gap-3'>

          <div className='max-w-[173px] h-fit rounded-[10px] overflow-hidden bg-gray'>
            <img src={GreekSalad} alt="geek salad" className='h-[96px] w-[173px]'/>
            <div className='flex text-deep-green font-bold text-[12px] px-2 justify-between pt-[10px]'>
              <p>Greek Salad</p>
              <p>$2.00</p>
            </div>
            <p className='text-[11px] px-2 pt-[8px] pb-[10px] text-deep-green'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
            <div className='flex text-deep-green font-semibold text-[11px] px-2 justify-between pt-[10px] pb-[13px] items-center'>
              <p>Order a Delivery</p>
              <img src={Delivery} alt="delivery" />
            </div>
          </div>
          
          <div className='max-w-[173px] h-fit rounded-[10px] overflow-hidden bg-gray'>
            <img src={Bruchetta} alt="bruchetta" className='h-[96px] w-[173px]'/>
            <div className='flex text-deep-green font-bold text-[12px] px-2 justify-between pt-[10px]'>
              <p>Bruchetta</p>
              <p>$2.00</p>
            </div>
            <p className='text-[11px] px-2 pt-[8px] pb-[10px] text-deep-green'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
            <div className='flex text-deep-green font-semibold text-[11px] px-2 justify-between pt-[10px] pb-[13px] items-center '>
              <p>Order a Delivery</p>
              <img src={Delivery} alt="delivery" />
            </div>
          </div>

          <div className='max-w-[173px] h-fit rounded-[10px] overflow-hidden bg-gray'>
            <img src={LemonDessert} alt="geek salad" className='h-[96px] w-[173px]'/>
            <div className='flex text-deep-green font-bold text-[12px] px-2 justify-between pt-[10px]'>
              <p>Lemon Dessert</p>
              <p>$2.00</p>
            </div>
            <p className='text-[11px] px-2 pt-[8px] pb-[10px] text-deep-green'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
            <div className='flex text-deep-green font-semibold text-[11px] px-2 justify-between pt-[10px] pb-[13px] items-center w-[90%]'>
              <p>Order a Delivery</p>
              <img src={Delivery} alt="delivery" />
            </div>
          </div>
        </div>
      </section>

      <section className='w-[90%] '>
        <h3 className=''>Testimonials</h3>
        <div>

        </div>
      </section>
    </>
  )
}