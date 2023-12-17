import React from 'react'
import Restaurant from '../assets/restaurant.jpg'

export default function Reservations() {
  return (
    <>
      <main className='w-screen relative top-[60px] md:top-[100px]'>
        <div className='mx-auto '>
          <img src={Restaurant} alt="" className='w-screen md:w-[80%] lg:w-[70%] mx-auto h-[40vh] md:h-[50vh]'/>
        </div>
        <section className='w-[90%] md:w-[75%] lg:w-[65%] mx-auto mt-10'>
          <h2 className='text-lg font-semibold text-secondary-400'>Fill the form bellow to book a table</h2>
          
          <form action="" className='flex flex-col gap-10 md:gap-12 mt-10 text-secondary-400 md:text-lg'>
            <label htmlFor="res-date"  className='flex justify-between items-center'> 
              Choose date: *
              <input type="date" required name="date" id="res-date" className='w-[60%] md:h-[60px] rounded-xl bg-secondary-300 border-none outline-none focus:border-deep-green'/>
            </label>

            <label htmlFor="numOfGuests" className='flex justify-between items-center'> 
              Number of guests: *
              <input type="number" required name="guests" id="numOfGuests" min={0} max={8}  className='w-[60%] md:h-[60px] rounded-xl bg-secondary-300 border-none outline-none'/>
            </label>
            
            <label htmlFor="" className='flex justify-between items-center'> 
              Select time: *
              <ul className='flex flex-wrap gap-3 w-[60%]'>
                <li className='bg-secondary-300 px-[10px] py-[6px] md:px-8 md:py-4 rounded-[10px]'>5:00 pm</li>

                <li className='bg-secondary-300 px-[10px] py-[6px] md:px-8 md:py-4 rounded-[10px]'>6:00 pm</li>

                <li className='bg-secondary-300 px-[10px] py-[6px] md:px-8 md:py-4 rounded-[10px]'>7:00 pm</li>

                <li className='bg-secondary-300 px-[10px] py-[6px] md:px-8 md:py-4 rounded-[10px]'>8:00 pm</li>

                <li className='bg-secondary-300 px-[10px] py-[6px] md:px-8 md:py-4 rounded-[10px]'>9:00 pm</li>

                <li className='bg-secondary-300 px-[10px] py-[6px] md:px-8 md:py-4 rounded-[10px]'>10:00 pm</li>
              </ul>
            </label>

            <label htmlFor="request"  className='flex justify-between items-center'> 
              Special request: 
              <textarea required name="request" id="request" placeholder='what else do you need...' className=' p-4 w-[60%] md:h-[120px] rounded-xl bg-secondary-300 border-none outline-none focus:border-deep-green'/>
            </label>

            <label htmlFor="occassion" className='flex justify-between items-center'>
              Occassion:
              <select name="occasion" id="occassion" className='w-[60%] rounded-xl md:h-[60px] bg-secondary-300 border-none outline-none focus:border-deep-green' > 
                <option value="selectOccassion">Select the occassion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
            </label>

            <h3 className='text-[18px] font-semibold'>Contact information</h3>

            <label htmlFor="res-name" className='flex justify-between items-center'>
              Name: *
              <input type="text" required name="name" id="res-name" placeholder='eg. Kojo' className='w-[60%] md:h-[60px] rounded-xl bg-secondary-300 border-none outline-none focus:border-deep-green'/>
            </label>

            <label htmlFor="res-tel" className='flex justify-between items-center'>
              Phone number : *
              <input type="tel" required name="phoneNumber" id="res-tel" placeholder='000 000 0000' className='w-[60%] md:h-[60px] rounded-xl bg-secondary-300 border-none outline-none focus:border-deep-green'/>
            </label>

            <button className='py-4 px-8 md:px-[92px] md:py-[22px] md:text-2xl bg-yellow w-fit mx-auto rounded-2xl md:mb-6 md:mt-6'>Make Reservation</button>
          </form>

        </section>
      </main>
    </>
  )
}
