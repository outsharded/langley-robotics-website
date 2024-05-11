import React from 'react';
import Header from './Header';
import Image from 'next/image';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen text-cyan-950 dark:text-amber-50 bg-stone-100 dark:bg-gray-800">
     <Header />
     <link rel="icon" href="/favicon.ico" sizes="any" />
      <main className="p-1 mb:p-4 px-4 mb:px-10">
        <div>
          <h1 className="text-5xl font-bold mb-4 pl-2">Team Powercut</h1>
          <h1 className="text-3xl font-bold mb-4 pl-2">#25268 - UK 497</h1>
          <div className="">
            <div className="flex p-3 dark:hover:bg-gray-700 hover:bg-gray-300 rounded-md">
              <div className="rounded-lg pl-1 basis-1/2 lg:basis-1/5">
                <Image className="rounded-md" src="/robot_in_room.jpg" alt="Powercut Robotics Team" priority={true} width={500} height={800} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
              </div>
              <div className="basis-1/4 flex-1 px-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
            <div className="flex p-3 dark:hover:bg-gray-700 hover:bg-gray-300 rounded-md">
              <div className="basis-1/4 flex-1 px-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
              <div className="rounded-lg pl-1 basis-1/2 lg:basis-1/5">
                <Image className="rounded-md" src="/robot_in_room.jpg" alt="Powercut Robotics Team" width={500} height={800} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
              </div>
            </div>
            <div className="flex p-3 dark:hover:bg-gray-700 hover:bg-gray-300 rounded-md">
              <div className="rounded-lg pl-1 basis-1/2 lg:basis-1/5">
                <Image className="rounded-md" src="/robot_in_room.jpg" alt="Powercut Robotics Team" width={500} height={800} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
              </div>
              <div className="basis-1/4 flex-1 px-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
