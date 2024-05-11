"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 opacity-95  bg-stone-100 dark:bg-gray-800 p-4 flex justify-between items-center h-24">
      <SpeedInsights/>
      <Analytics/>
      <div className={`basis-1/2 flex items-center ${isMenuOpen ? 'hidden' : ''}`}>
        <Link href="/">
          <h1 className={`px-2 text-2xl font-bold align-middle font-mono ${isMenuOpen ? 'hidden' : ''}`}>Langley <br></br> Robotics</h1>
        </Link>
        <div className="hidden md:block logo w-72 p-4">
          <Image src="/powercut-logo.png" alt="Powercut Robotics Team Logo" width={1000} height={136} sizes="(max-width: 768px) 33vw, (max-width: 1200px) 15vw, 15vw" />
        </div>
      </div>
      <div className="md:basis-3/5 flex justify-end w-full">
        <div className={`w-full lg:w-auto ${isMenuOpen ? '' : 'hidden lg:flex'}`}>
          <nav className={`nav ${isMenuOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="flex flex-wrap lg:justify-end">
              <Link href="/about" className="hover:text-gray-300 p-2">
                About Us
              </Link>
              <Link href="/team" className="hover:text-gray-300 p-2">
                Meet The Team
              </Link>
              <Link href="/outreach" className="hover:text-gray-300 p-2">
                Outreach
              </Link>
              <Link href="https://www.gofundme.com/en-gb" className="hover:text-gray-300 p-2">
                Donate
              </Link>
              <Link href="https://www.instagram.com/lpsb_robotics/" className="hover:text-gray-300 p-2">
                Instagram
              </Link>
            </div>
          </nav>
        </div>
        <div className="lg:hidden absolute top-8 right-4">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
