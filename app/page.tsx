import React from 'react';
import Header from './Header';
import Image from 'next/image';
import Footer from './Footer';

const HomePage: React.FC = () => {
  return (
    
    <div className="min-h-screen font-avenir font-medium text-cyan-950 dark:text-amber-50 bg-stone-100 dark:bg-black">
      <Header />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <main className="">

        <div className='bg-fixed bg-cover pb-14' style={{backgroundImage: 'url(/backgrounds/topography.svg)'}}>
          
          <div className='pt-32 -mt-24'></div>
          <div className='flex justify-center items-center'>
          <div className="w-4/5 p-2 rounded-lg">
            <div className="w-full flex justify-center lg:h-[600px] 2xl:h-[800px]">
              <Image className="rounded-lg object-cover object-top opacity-80 dark:opacity-70" src="/side-pitch.png" alt="image" width="2000" height="1501" priority />
              <div className="absolute text-center pt-2 w-full">
                <h1 className="text-3xl md:text-5xl font-bold font-avenir text-amber-50">Team Powercut</h1>
                <h1 className="text-3xl font-medium font-avenir invisible md:visible text-amber-50">First Tech Challenge #25268 - UK 497</h1>
            </div>
            </div>

          </div>
          </div>
          
        </div>

        <div className='w-full bg-powercut_yellow text-cyan-950 grid grid-cols-1 lg:grid-cols-2 justify-center items-center py-2 items-center text-center md:text-start py-6'>
          
          <div className='rounded-lg m-4 h-full'>
            <Image className="rounded-lg float-right w-2/5 2 m-3 " src="/content/backdrops.png" alt="image" width="1000" height="1000" />
            <h1 className="text-5xl font-medium font-avenir p-2">Outreach</h1>
            <p className='p-2 text-md text-start'>Outreach is a crucial part of our team strategy. It is incredibly important to us to outreach to other schools</p>
            
          </div>
         
          <div className='rounded-lg m-4 h-full'>
            <Image className="rounded-lg float-left w-2/5 m-3 " src="/content/in_feild.png" alt="image" width="1000" height="1000" />
            <h1 className="text-5xl font-medium font-avenir p-2">Competition</h1>
            <p className='p-2 text-md text-start'>On March 23rd we attented the South East Regional. We won the Innovate Award and we are ranked 8th in the UK.</p>
          </div>
        
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 p-3 text-center md:text-start text-md'>
          
          <div className='rounded-lg m-4'>
            <h1 className="text-5xl font-medium font-avenir p-2">Lorem Ipsum</h1>
            <p className='p-2'>mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt</p>
          </div>

          <div className='rounded-lg m-4'>
            <h1 className="text-5xl font-medium font-avenir p-2">Lorem Ipsum</h1>
            <p className='p-2'>ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed</p>
          </div>

          <div className='rounded-lg m-4'>
            <h1 className="text-5xl font-medium font-avenir p-2">Lorem Ipsum</h1>
            <p className='p-2'>tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim</p>
          </div>
          
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
