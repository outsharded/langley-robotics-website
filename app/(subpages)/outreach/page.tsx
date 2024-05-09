import React from 'react';
import Header from '@/app/Header';
import Image from 'next/image';

const HomePage: React.FC = () => {
  return (
    <div className="text-[#252622] dark:text-[#fffcf2] bg-[#fffcf2] dark:bg-[#403d39]">
      <Header />
      <main className="p-4">
        <div>
          <h1 className="text-5xl font-bold mb-4">Outreach</h1>
          <div className="">
            <div className="flex py-1 hover:bg-stone-400 rounded-md">
                <div className="basis-1/4 flex-1 pl-4">
                <h1 className="text-2xl font-bold pb-2">Primary School</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
              <div className="rounded-lg pl-1 basis-1/4">
                <Image className="rounded-md" src="/robot_in_room.jpg" alt="Powercut Robotics Team" width={10000} height={100000} />
              </div>
            </div>
            <div className="flex py-1 hover:bg-stone-400 rounded-md">
              <div className="rounded-lg pl-1 basis-1/4">
                <Image className="rounded-md" src="/robot_in_room.jpg" alt="Powercut Robotics Team" width={10000} height={100000} />
              </div>
              <div className="basis-1/4 flex-1 pl-4">
              <h1 className="text-2xl font-bold pb-2">Meetings</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
            <div className="flex py-1 hover:bg-stone-400 rounded-md">
                <div className="basis-1/4 flex-1 pl-4">
                <h1 className="text-2xl font-bold pb-2">Presentations</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
              <div className="rounded-lg pl-1 basis-1/4">
                <Image className="rounded-md" src="/robot_in_room.jpg" alt="Powercut Robotics Team" width={10000} height={100000} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
