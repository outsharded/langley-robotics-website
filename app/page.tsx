import React from 'react';
import Header from './Header';
import Image from 'next/image';

const HomePage: React.FC = () => {
  return (
    <div className="text-[#252622] dark:text-[#fffcf2] bg-indigo-300 dark:bg-indigo-900">
     <Header />
      <main className="p-4">
        <div>
          <h1 className="text-5xl font-bold mb-4">Team Powercut UK-497, Global 25268</h1>
          <div className="">
            <div className="flex py-1 dark:hover:bg-slate-700 hover:bg-slate-300 rounded-md">
              <div className="rounded-lg pl-1 basis-1/4">
                <Image className="rounded-md" src="/robot_in_room.jpg" alt="Powercut Robotics Team" width={10000} height={100000} />
              </div>
              <div className="basis-1/4 flex-1 pl-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
            <div className="flex py-1 dark:hover:bg-slate-700 hover:bg-slate-300 rounded-md">
              <div className="rounded-lg pl-1 basis-1/4">
                <Image className="rounded-md" src="/robot_in_room.jpg" alt="Powercut Robotics Team" width={10000} height={100000} />
              </div>
              <div className="basis-1/4 flex-1 pl-4">
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
