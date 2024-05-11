import React from 'react';
import Header from '@/app/Header';
import Image from 'next/image';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen text-[#252622] dark:text-[#fffcf2] bg-stone-100 dark:bg-gray-800">
      <Header />
      <main className="p-1 mb:p-4 px-4 mb:px-10">
        <div>
          <h1 className="text-5xl font-bold font-mono mb-4 px-4">Meet the team</h1>
          <div className="">
            <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2'>
              
              <div className='relative group hover:bg-stone-200 dark:hover:bg-gray-600 rounded-lg overflow-hidden'>
                <div className="transition-opacity duration-500 ease-in-out group-hover:opacity-15 opacity-100">
                  <Image src="/headshots/square.jpeg" alt="Powercut Robotics Team" width={500} height={500} sizes="(max-width: 768px) 50wv, (max-width: 1024px) 33vw, 100vw"/>
                </div>
                <div className="absolute bottom-10 left-0 font-mono text-2xl px-2 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">Fabian</div>
                <div className="absolute bottom-0 left-0 text-xl p-2 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">Lead programmer</div>
                <h2 className='absolute top-0 p-2 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100'>Absolute neek. Doesn&apos;t touch grass, no sports. Medically limited to 5 minutes of sunlight a day.</h2>
              </div>

              <div className='relative group hover:bg-stone-200 dark:hover:bg-gray-600 rounded-lg overflow-hidden'>
                <div className="transition-opacity duration-500 ease-in-out group-hover:opacity-15 opacity-100">
                  <Image src="/headshots/square.jpeg" alt="Powercut Robotics Team" width={500} height={500} sizes="(max-width: 768px) 50wv, (max-width: 1024px) 33vw, 100vw"/>
                </div>
                <div className="absolute bottom-10 left-0 font-mono text-2xl px-2 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">Gupta</div>
                <div className="absolute bottom-0 left-0 text-xl p-2 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">Non-technical Lead</div>
                <h2 className='absolute top-0 p-2 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100'>Rich lanky man</h2>
              </div>

              <div className='relative group hover:bg-stone-200 dark:hover:bg-gray-600 rounded-lg overflow-hidden'>
                <div className="transition-opacity duration-500 ease-in-out group-hover:opacity-15 opacity-100">
                  <Image src="/headshots/square.jpeg" alt="Powercut Robotics Team" width={500} height={500} sizes="(max-width: 768px) 50wv, (max-width: 1024px) 33vw, 100vw"/>
                </div>
                <div className="absolute bottom-10 left-0 font-mono text-2xl px-2 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">Arthur</div>
                <div className="absolute bottom-0 left-0 text-xl p-2 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">Engineering lead</div>
                <h2 className='absolute top-0 p-2 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100'>Ginger, leads to a pot of gold</h2>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
