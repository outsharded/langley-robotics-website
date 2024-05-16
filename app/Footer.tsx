"use client"
import React, { useState } from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='font-avenir grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 w-full text-md'>

        <div className='bg-stone-200 dark:bg-neutral-950 h-32 m-2 rounded-lg'>
          <h1 className='text-6xl p-2 font-bold'>Contact Us</h1>
          
          <a href="mailto:conatct@powercut-robotics.org" className='text-xl px-2 py-1'>Contact: contact@powercut-robotics.org</a><br/>
        </div>

        <div className='bg-stone-200 dark:bg-neutral-950 h-32 m-2 rounded-lg'>
            <h1 className='text-6xl p-2 font-bold'>Finance</h1>
            <a href="mailto:keiran@powercut-robotics.org" className='text-xl px-2 py-1'>Finance: finance@powercut-robotics.org</a><br/>
        </div>

        <div className='bg-stone-200 dark:bg-neutral-950 h-32 m-2 rounded-lg'>
            <h1 className='text-6xl p-2 font-bold'>Socials</h1>
            <a href="https://www.instagram.com/powercut_robotics/" className='text-xl px-2 py-1'>Instagram</a><br/>
        </div>
      <p className='m-2 font-avenir'>© Powercut Robotics</p>
    </footer>
  );
};

export default Footer;
