import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center bg-slate-200 dark:bg-slate-900 p-4 h-14">
      <div className="flex items-center">
        <div className="logo h-12 p-2">
          <Image src="/logo.png" alt="Powercut Robotics Team Logo" width={120} height={10} />
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
            <Link href="https://www.gofundme.com/en-gb" className="hover:text-gray-300">
              Donate
            </Link>
          </li>
          <li>
            <a href="https://www.instagram.com/lpsb_robotics/" className="hover:text-gray-300">Instagram</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
