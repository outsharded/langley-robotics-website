import React from 'react';
import Header from '@/app/Header';
import Image from 'next/image';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen text-[#252622] dark:text-[#fffcf2]  bg-stone-100 dark:bg-gray-800">
      <Header />
      <main className="p-1 mb:p-4 px-4 mb:px-10">
        <div>
          <h1 className="text-5xl font-bold font-avenir mb-4 px-4">About Us</h1>
          <div className="">
            <div className="flex p-2 dark:hover:bg-gray-700 hover:bg-gray-300 rounded-md">
                <div className="basis-1/4 flex-1 pl-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
              <div className="rounded-lg px-2 basis-1/2 lg:basis-1/5">
                <Image className="rounded-md" src="/robot_in_room.jpg" alt="Powercut Robotics Team"width={500} height={800} sizes="(max-width: 1024px) 50vw, 20vw"/>
              </div>
            </div>
            <div className="flex p-2 dark:hover:bg-gray-700 hover:bg-gray-300 rounded-md">
              <div className="rounded-lg px-2 basis-1/2 lg:basis-1/5">
                <Image className="rounded-md" src="/robot_in_room.jpg" alt="Powercut Robotics Team"width={500} height={800} sizes="(max-width: 1024px) 50vw, 20vw"/>
              </div>
              <div className="basis-1/4 flex-1 pl-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
            <div className="flex p-2 dark:hover:bg-gray-700 hover:bg-gray-300 rounded-md">
                <div className="basis-1/4 flex-1 pl-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
              <div className="rounded-lg px-2 basis-1/2 lg:basis-1/5">
                <Image className="rounded-md" src="/robot_in_room.jpg" alt="Powercut Robotics Team"width={500} height={800} sizes="(max-width: 1024px) 50vw, 20vw"/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
