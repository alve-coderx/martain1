import React from 'react';
import { AiFillLock, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FaWarehouse } from 'react-icons/fa';
import ScrollAnimation from 'react-animate-on-scroll';

const Services = () => {
  return (
    <ScrollAnimation animateIn='fadeIn'>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
        <div className='lg:col-span-2 flex flex-col items-center text-center'>
          <h1 className='lg:text-[5rem] text-[3rem] my-4'>Your trust is important</h1>
          <p className='text-xl text-[#afafaf] w-96'>Martian takes care of everything you need to interact within the Move ecosystem</p>
        </div>
        <div className='shadow-sm p-10 rounded-xl bg-white'>
          <AiFillLock className='bg-slate-100 text-[gray] text-6xl px-3 rounded-[50rem]' />
          <p className='text-5xl my-5'>Non-custodial</p>
          <p className='text-[#afafaf] text-xl font-[500]'>You have complete custody of your private keys.
            Martian will never store your secret phrase or
            private keys.</p>
        </div>
        <div className='shadow-sm p-10 rounded-xl bg-white'>
          <AiOutlineEyeInvisible className='bg-slate-100 text-[gray] text-6xl px-3 rounded-[50rem]' />
          <p className='text-5xl my-5'>Privacy</p>
          <p className='text-[#afafaf] text-xl font-[500]'>We value your privacy and will never track or store any of your personal or financial information.</p>
        </div>
        <div className='lg:col-span-2 shadow-sm p-10 rounded-xl bg-white'>
          <FaWarehouse className='bg-slate-100 text-[gray] text-6xl px-3 rounded-[50rem]' />
          <p className='text-5xl my-5'>Why this is the future</p>
          <p className='text-[#afafaf] text-xl font-[500]'>The future of finance is humans taking full control and ownership of their assets. Martian empowers you to do that in a simple and elegant way.</p>
        </div>
      </div>
    </ScrollAnimation>

  )
}

export default Services