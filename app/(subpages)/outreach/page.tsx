import React from 'react';
import Header from '@/app/Header';
import Image from 'next/image';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen text-[#252622] dark:text-[#fffcf2] bg-stone-100 dark:bg-gray-800">
      <Header />
      <main className="p-1 mb:p-4 px-4 mb:px-10">
        <div>
          <h1 className="text-5xl font-bold font-okcomputer mb-4 px-4">Outreach</h1>
          <div className="grid grid-flow-row-dense gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2">
              
          <div className='aspect-[2/1] relative group col-span-2 hover:bg-stone-200 dark:hover:bg-gray-600 rounded-lg overflow-hidden'>
                <div className="transition-opacity duration-500 ease-in-out group-hover:opacity-15 opacity-100">
                  <Image className="rounded-lg" src="/2-1.png" alt="Powercut Robotics Team" width={1000} height={500} sizes="(max-width: 768px) 50wv, (max-width: 1024px) 33vw, 100vw"/>
                </div>
                <div className="absolute top-0 left-0 bg-stone-100 dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-70 rounded-br-lg font-mono text-2xl px-2 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">School</div>
                <div className="absolute top-10 left-0 bg-stone-100 dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-70 rounded-r-lg text-xl p-2 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">22/3/2067</div>
                <h2 className='absolute top-0 p-2 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100'>Lorem ipsum</h2>
              </div>

              <div className='aspect-square relative group hover:bg-stone-200 d dark:hover:bg-gray-600 rounded-lg overflow-hidden'>
                <div className="transition-opacity duration-500 ease-in-out group-hover:opacity-15 opacity-100 aspect-square">
                  <Image className="rounded-lg" src="/headshots/square.jpeg" alt="Powercut Robotics Team" width={600} height={600} sizes="(max-width: 768px) 50wv, (max-width: 1024px) 33vw, 100vw"/>
                </div>
                <div className="absolute top-0 left-0 bg-stone-100 dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-70 rounded-br-lg font-mono text-2xl px-2 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">Meeting</div>
                <div className="absolute top-10 left-0 bg-stone-100 dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-70 rounded-r-lg text-xl p-2 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">76/34/3233</div>
                <h2 className='absolute top-0 p-2 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100'>Some teams</h2>
              </div>

              <div className='aspect-square relative group hover:bg-stone-200 dark:hover:bg-gray-600 rounded-lg overflow-hidden'>
                <div className="transition-opacity duration-500 ease-in-out group-hover:opacity-15 opacity-100 aspect-square">
                  <Image className="rounded-lg" src="/robot_in_room.jpg" alt="Powercut Robotics Team" width={600} height={600} sizes="(max-width: 768px) 50wv, (max-width: 1024px) 33vw, 100vw"/>
                </div>
                <div className="absolute top-0 left-0 bg-stone-100 dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-70 rounded-br-lg font-mono text-2xl px-2 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">Presentation</div>
                <div className="absolute top-10 left-0 bg-stone-100 dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-70 rounded-r-lg text-xl p-2 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">dd/mm/yyyy</div>
                <h2 className='absolute top-0 p-2 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100'>Slideshow edit mr birling</h2>
              </div>

              <div className='aspect-square relative group hover:bg-stone-200 dark:hover:bg-gray-600 rounded-lg overflow-hidden'>
                <div className="transition-opacity duration-500 ease-in-out group-hover:opacity-15 opacity-100 aspect-square">
                  <Image className="rounded-lg" src="/robot_in_room.jpg" alt="Powercut Robotics Team" width={600} height={600} sizes="(max-width: 768px) 50wv, (max-width: 1024px) 33vw, 100vw"/>
                </div>
                <div className="absolute top-0 left-0 bg-stone-100 dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-70 rounded-br-lg font-mono text-2xl px-2 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">Dah</div>
                <div className="absolute top-10 left-0 bg-stone-100 dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-70 rounded-r-lg text-xl p-2 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">dd/mm/yyyy</div>
                <h2 className='absolute top-0 p-2 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100'>indubitibaly</h2>
              </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
