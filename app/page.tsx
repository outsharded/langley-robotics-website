import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomePage: React.FC = () => {
  return (
    <div className="text-[#252622] dark:text-[#fffcf2] bg-[#fffcf2] dark:bg-[#403d39]">
      <header className="flex justify-between items-center bg-[#eb5e28] dark:bg-stone-900 p-4 h-14">
        <div className="flex items-center">
          <div className="logo h-12 p-2">
            <Image src="/logo.png" alt="Powercut Robotics Team Logo" width={120} height={10}  />
          </div>
          <Link href="/"><h1 className="text-4xl font-bold align-middle font-mono">Langley Robotics</h1></Link>
          
        </div>
        <nav className="nav">
          <ul className="flex items-center space-x-4">
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-gray-300">
                Meet the Team
              </Link>
            </li>
            <li>
              <Link href="/outreach" className="hover:text-gray-300">
                Outreach
              </Link>
            </li>
            <li>
              <Link href="/donate" className="hover:text-gray-300">
                Donate
              </Link>
            </li>
            <li>
              <a href="https://www.instagram.com/powercutrobotics/" className="hover:text-gray-300">Instagram</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="p-4">
        <div>
          <h1 className="text-5xl font-bold mb-4">Team Powercut UK-497, Global 25268</h1>
          <div className="">
            <div className="flex py-1 hover:bg-stone-400 rounded-md">
              <div className="rounded-lg pl-1 basis-1/4">
                <Image className="rounded-md" src="/robot_in_room.jpg" alt="Powercut Robotics Team" width={10000} height={100000} />
              </div>
              <div className="basis-1/4 flex-1 pl-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
            <div className="flex py-1 hover:bg-stone-400 rounded-md">
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
