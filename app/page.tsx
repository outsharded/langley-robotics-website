import React from 'react';
import Header from './Header';
import Image from 'next/image';
import Footer from './Footer';

import side_pitch from '../public/content/home/team_at_champs.webp';
import backdrops from '../public/content/home/blue-green-underglow.jpeg';
import in_field from '../public/content/home/keyring.jpeg';

const HomePage: React.FC = () => {
  return (
    
    <div className="min-h-screen font-avenir font-medium text-cyan-950 dark:text-amber-50 bg-stone-100 dark:bg-black">
      <Header />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <main className="">

        <div className='bg-fixed md:bg-cover pb-14' style={{backgroundImage: 'url(/backgrounds/topography.svg)'}} rel='preload'>
          
          <div className='pt-40 -mt-24'></div>
          <div className='flex justify-center items-center'>
          <div className="w-11/12 p-2 rounded-lg">
            <div className="w-full flex justify-center lg:h-[800px] 2xl:h-[1000px]">
              <Image className="rounded-lg object-cover object-top brightness-90 dark:opacity-95 opacity-100" src={side_pitch} alt="powercut team with awards"  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 75vw, 80vw" priority />
              <div className="absolute text-center pt-2 w-full text-amber-50">
                <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold font-avenir">Team Powercut</h1>
                <h1 className="text-3xl xl:text-4xl font-medium font-avenir invisible lg:visible">First Tech Challenge #25268 - UK 497</h1>
            </div>
            </div>

          </div>
          </div>
          
        </div>

        <div className='w-full bg-powercut_pink_contrast text-cyan-950 grid grid-cols-1 lg:grid-cols-2 justify-center items-center text-center md:text-start py-6'>
          
          <div className='rounded-lg m-4 h-full'>
            <Image className="rounded-lg float-right w-2/5 2 m-3 aspect-[1/1] object-cover" src={backdrops} alt="game backdrops"  sizes="(max-width: 1024px) 40vw, 20vw" />
            <h1 className="text-4xl font-medium font-avenir p-2">About Us</h1>
            <p className='p-2 text-lg font-medium text-start'>
Hi! We&apos;re Powercut Robotics, #25268 (UK-497) from Langley Park School for Boys in South London. 
This is our rookie year of FTC. <br /> <br /> 
Despite our kit only arriving in November, we placed very well in regionals. 
After this, we rebuilt for finals, having learnt a lot from other teams. 
We also concentrated our focus on outreach and fundraising, and recently found out that we are a championship organisation!</p>
            
          </div>
         
          <div className='rounded-lg m-4 h-full'>
            <Image className="rounded-lg float-left w-2/5 m-3 aspect-[1/1] object-cover" src={in_field} alt="robot in field" sizes="(max-width: 1024px) 40vw, 20vw" />
            <h1 className="text-4xl font-medium font-avenir p-2">Our Season</h1>
            <p className='p-2 text-lg font-small text-start'>We attended the South East Regional 2 at Harris Sutton on the 23rd March. We won the Innovate award for our intake system, and Finalist Alliance Captain award. <br /> <br /> 
           We attended the UK championship on 21st June. We won Think award and Division 1 Finalist Alliance 1st Pick. Thanks to all the staff and volunteers that made this season possible!</p>
          </div>
        
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 p-3 text-center md:text-start text-md'>
          
          <div className='rounded-lg m-4'>
            <h1 className="text-5xl font-medium font-avenir p-2">Outreach</h1>
            <p className='p-2'>We are dedicated to expanding uptake of STEM and assisting other FTC teams. <br />We are working with a local team at Ravenswood to assist their robotics program, and are pushing STEM in local primary schools, and will be running sessions for local primaries to experiment with engineering concepts using Lego.</p>
          </div>

          <div className='rounded-lg m-4'>
            <h1 className="text-5xl font-medium font-avenir p-2">Control</h1>
            <p className='p-2'>Our control system uses complex algoriths and theories to maximise on-field performance. We use many advanced systems, such as Proportional, Integral, Derivative controllers and FeedForward controllers, especially for pathing during autonomous.</p>
          </div>

          <div className='rounded-lg m-4'>
            <h1 className="text-5xl font-medium font-avenir p-2">Design</h1>
            <p className='p-2'>We use a combination of an iterative design process and CAD systems to test and prototype ideas to create an effective robot to compete. We have created many effective subsystems, such as our wristed grip and drone launch system.</p>
          </div>
          
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
