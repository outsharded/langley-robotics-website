"use client"
import React, { useState } from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='font-avenir grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 w-full text-md'>

        <div className='bg-stone-200 dark:bg-neutral-950 h-32 m-2 rounded-lg'>
          <h1 className='text-5xl p-2 font-bold'>Contact Us</h1>
          <div className='px-2'>
          <a href="mailto:mfry@lpsb.org.uk,contact@powercut-robotics.org,info@powercut-robotics.org" className='text-xl py-1'>Contact: contact@powercut-robotics.org</a><br/></div>
        </div>
{/* 
        <div className='bg-stone-200 dark:bg-neutral-950 h-32 m-2 rounded-lg'>
            <h1 className='text-5xl p-2 font-bold'>Finance</h1>
            <div className='px-2'>
            <a href="mailto:finance@powercut-robotics.org" className='text-xl py-1'>Finance: finance@powercut-robotics.org</a><br/></div>
        </div> */}

        <div className='bg-stone-200 dark:bg-neutral-950 h-32 m-2 rounded-lg'>
            <h1 className='text-5xl p-2 font-bold'>Socials</h1>
            <div className='px-2'>
            <a href="https://www.instagram.com/powercut_robotics/" className='text-xl py-1'>Instagram</a><br/></div>
        </div>
        <div><p className='pl-2 m-2 font-avenir'>© Powercut Robotics</p>
        <a href="https://github.com/outsharded/outsharded" className='pl-2 m-2 font-avenir'>Website by Fabian Oley - outsharded</a></div>
      
    </footer>
  );
};

export default Footer;
