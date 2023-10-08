import React from 'react'
import RestaurantPhoto from '../assets/restauranfood.jpg'
import Bruchetta from '../assets/bruchetta.jpg'
import LemonDessert from '../assets/lemon-dessert.jpg'
import GreekSalad from '../assets/greek-salad.jpg'
import Delivery from '../assets/delivery.svg'
import { NavLink } from 'react-router-dom'
import ManInHat from '../assets/man-in-hat.jpg'
import Star from '../assets/star.png'
import OldLady from '../assets/old-lady.jpg'
import AsianGuy from '../assets/asian-guy.jpg'
import BlackLady from '../assets/black-female.jpg'
import Owners from '../assets/Mario-Adrian-b.jpg'
import Founders from '../assets/Mario-Adrian-a.jpg'


export default function Home() {
  return ( 
    <>
      <main className='relative top-[60px] w-[screen] bg-deep-green h-[60vh] md:h-[80vh] flex justify-center ' >
        <div className=' flex justify-evenly items-center h-full w-[90%]  md:w-[80%] lg:w-[70%]'>
          <div className='h-fit max-w-[400px] md:w-[50%] relative  flex flex-col gap-5 md:gap-8'>
            <header >
              <h1 className='font-bold text-yellow text-2xl md:text-[40px] pb-3'>Little Lemon</h1>
              <p className='text-xl font-medium text-white  md:text-[30px]'>Chicago</p>
            </header>
              
            <p className='text-base text-white md:text-[20px] md:w-[25ch] lg:w-[35ch]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              
            <button className='bg-yellow hover:bg-orange hover:text-pink px-[16px]  py-[8px] md:py-[10px] rounded-2xl font-semibold w-fit text-deep-green md:text-[20px]'>
              <NavLink to='reservations'>
                Reserve a Table
              </NavLink>
            </button>
          </div>

          <div className='hidden md:block w-[50%] h-[100%] relative'>
            <img src={RestaurantPhoto} alt="Restaurant photo" className='absolute top-44 lg:top-44 md:h-[75%] lg:h-[85%] md:w-[100%] lg:w-[95%] rounded-[32px] right-0'/>
          </div>
        </div>
        
      </main>

      <section className='relative top-[60px] md:top-[170px] flex flex-col gap-2 md:gap-10'>
        <section className='mt-[16px] w-[90%] md:w-[80%] lg:w-[70%] mx-auto'>
            <div className='inline-flex w-full justify-between items-center'>
              <p className='text-[18px] md:text-xl text-secondary-400 font-medium'>This weeks specials!</p>
              <button className='text-[14px] md:text-[20px] bg-yellow  hover:bg-orange hover:text-pink py-[8px] md:py-[10px] px-[16px]  text-deep-green rounded-2xl font-semibold'>Online Menu</button>
            </div>

            <div className='mt-[52px] w-[90%] md:[80%] flex justify-center mx-auto flex-wrap gap-3 md:gap-6'>

              <div className='w-[173px] md:w-[220px] h-fit rounded-[10px] overflow-hidden bg-gray'>
                <img src={GreekSalad} alt="geek salad" className='h-[96px] md:h-[120px] w-full'/>
                <div className='flex text-deep-green font-bold text-[12px] md:text-[16px] px-2 justify-between pt-[10px]'>
                  <p>Greek Salad</p>
                  <p>$2.00</p>
                </div>
                <p className='text-[11px] md:text-[14px] px-2 pt-[8px] pb-[10px] text-deep-green'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
                <div className='flex text-deep-green font-semibold text-[11px] md:text-[14px] px-2 justify-between pt-[10px] pb-[13px] items-center'>
                  <p>Order a Delivery</p>
                  <img src={Delivery} alt="delivery" />
                </div>
              </div>
              
              <div className='w-[173px] md:w-[220px] h-fit rounded-[10px] overflow-hidden bg-gray'>
                <img src={Bruchetta} alt="bruchetta" className='h-[96px] md:h-[120px] w-full'/>
                <div className='flex text-deep-green font-bold text-[12px] md:text-[16px] px-2 justify-between pt-[10px]'>
                  <p>Bruchetta</p>
                  <p>$2.00</p>
                </div>
                <p className='text-[11px] md:text-[14px] px-2 pt-[8px] pb-[10px] text-deep-green'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
                <div className='flex text-deep-green font-semibold md:text-[14px] text-[11px] px-2 justify-between pt-[10px] pb-[13px] items-center '>
                  <p>Order a Delivery</p>
                  <img src={Delivery} alt="delivery" />
                </div>
              </div>

              <div className='w-[173px] md:w-[220px] h-fit rounded-[10px] overflow-hidden bg-gray'>
                <img src={LemonDessert} alt="geek salad" className='h-[96px] md:h-[120px] w-full'/>
                <div className='flex text-deep-green font-bold text-[12px] md:text-[16px] px-2 justify-between pt-[10px]'>
                  <p>Lemon Dessert</p>
                  <p>$2.00</p>
                </div>
                <p className='text-[11px] md:text-[14px] px-2 pt-[8px] pb-[10px] text-deep-green'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
                <div className='flex text-deep-green font-semibold text-[11px] md:text-[14px] px-2 justify-between pt-[10px] pb-[13px] items-center w-[90%]'>
                  <p>Order a Delivery</p>
                  <img src={Delivery} alt="delivery" />
                </div>
              </div>
            </div>
          </section>

          <section className='w-[100%] lg:w-[70%] mx-auto h-fit pt-[56px] flex flex-col gap-9 overflow-hidden'>
            <h3 className='pl-[5%] md:pl-[10%]  text-base md:text-xl text-secondary-400 font-medium'>Testimonials</h3>
            {/* container for various testimonies */}
            <div className='relative w-screen overflow-x-auto lg:overflow-hidden px-6'>

              <div className='w-fit flex gap-6 pb-6'>
                <div className='flex flex-col bg-secondary-400 h-[238px] w-[226px] rounded-2xl gap-[23px] py-[13px] px-[16px]'>
                  <div className='flex'>
                    <img src={Star} alt="star" className='w-8 h-7' />
                    <img src={Star} alt="star" className='w-8 h-7' />
                    <img src={Star} alt="star" className='w-8 h-7' />
                    <img src={Star} alt="star" className='w-8 h-7' />
                    <img src={Star} alt="star" className='w-8 h-7' />
                  </div>

                  <div className='flex justify-start items-center gap-4'>
                    <img src={AsianGuy} alt="Asian guy" className='h-[87px] w-[87px] rounded-full'/>
                    <p className='text-white font-semibold'>Thod Boehly</p>
                  </div>

                  <p className='text-center text-[12px] text-secondary-300'>‘’ I really enjoy their food. They are the best in town’’</p>
                </div>

                <div className='flex flex-col bg-secondary-400 h-[238px] w-[226px] rounded-2xl gap-[23px] py-[13px] px-[16px]'>
                  <div className='flex'>
                    <img src={Star} alt="star" className='w-8 h-7' />
                    <img src={Star} alt="star" className='w-8 h-7' />
                    <img src={Star} alt="star" className='w-8 h-7' />
                    <img src={Star} alt="star" className='w-8 h-7' />
                  </div>

                  <div className='flex justify-start items-center gap-4'>
                    <img src={OldLady} alt="Old lady" className='h-[87px] w-[87px] rounded-full'/>
                    <p className='text-white font-semibold'>Emma Kokk</p>
                  </div>

                  <p className='text-center text-[12px] text-secondary-300'>‘’ They prepare their food just as I want. They have good customer service‘’</p>
                </div>

                <div className='flex flex-col bg-secondary-400 h-[238px] w-[226px] rounded-2xl gap-[23px] py-[13px] px-[16px]'>
                  <div className='flex '>
                    <img src={Star} alt="star" className='w-8 h-7' />
                    <img src={Star} alt="star" className='w-8 h-7' />
                    <img src={Star} alt="star" className='w-8 h-7' />
                    <img src={Star} alt="star" className='w-8 h-7' />
                    <img src={Star} alt="star" className='w-8 h-7' />
                  </div>

                  <div className='flex justify-start items-center gap-4'>
                    <img src={ManInHat} alt="Sampson" className='h-[87px] w-[87px] rounded-full'/>
                    <p className='text-white font-semibold'>Sampson</p>
                  </div>

                  <p className='text-center text-[12px] text-secondary-300'>‘’ If you are looking for the best restaurant, then you have come to the right place ‘’</p>
                </div>

                <div className='flex flex-col bg-secondary-400 h-[238px] w-[226px] rounded-2xl gap-[23px] py-[13px] px-[16px]'>
                  <div className='flex'>
                    <img src={Star} alt="star" className='w-8 h-7' />
                    <img src={Star} alt="star" className='w-8 h-7' />
                    <img src={Star} alt="star" className='w-8 h-7' />
                    <img src={Star} alt="star" className='w-8 h-7' />
                  </div>

                  <div className='flex justify-start items-center gap-4'>
                    <img src={BlackLady} alt="Black woman" className='h-[87px] w-[87px] rounded-full'/>
                    <p className='text-white font-semibold'>Cindy</p>
                  </div>

                  <p className='text-center text-[12px] text-secondary-300'>‘’ They have the best desert in town.‘’</p>
                </div>

              </div>
            

              </div>
          </section>

          <section className='w-[90%] md:w-[80%] lg:w-[70%] pt-[70px] mx-auto'>
            <div className='flex flex-col md:flex-row justify-center items-center gap-[39px] text-secondary-400 w-full'>
              <div className='text-center md:text-left md:w-1/2'>
                <div className='pb-4'>
                  <h2 className='text-lg md:text-xl font-semibold'>Little Lemon</h2>
                  <p className='text-base md:text-lg font-meduim'>Chicago</p>
                </div>
                <p className='text-[12px] md:text-base w-full'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              
              <div className='flex relative pt-20 w-full md:w-1/2'>
                <div className='w-fit mx-auto'>
                  <img src={Founders} alt="Mario and Adrian" className='h-[140px] lg:h-[180px] absolute right-0 lg:right-24 top-[-10px]'/>
                  <img src={Owners} alt="Mario and Adrian" className='h-[140px] lg:h-[180px] '/>
                </div>
              </div>
            </div>
          </section>
      </section>
    
      
    </>
  )
}