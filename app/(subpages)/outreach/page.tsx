import React from 'react';
import Header from '@/app/Header';
import Image from 'next/image';
import Footer from '@/app/Footer';
import dustpan from '../../../public/content/dustpan.png'
import gsub0 from '../../../public/content/brighton_coll.png'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen text-[#252622] dark:text-[#fffcf2] bg-stone-100 dark:bg-black">
      <Header />
      <main className="-mt-24 pt-28 bg-fixed md:bg-cover" style={{backgroundImage: 'url(/backgrounds/topography.svg)'}}>
        <div>
          <h1 className="text-7xl font-bold font-avenir m-4 text-center">Outreach</h1>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 px-8 '>
            <Image
              className='w-full rounded-lg object-cover object-center lg:h-[400px] 2xl:h-[600px]'
              src={dustpan}
              alt='robot with dustpan on it'
            />
            <Image
              className='rounded-lg w-full object-cover object-center lg:h-[400px] 2xl:h-[600px]'
              src={gsub0}
              alt='robot with dustpan on it'
            />
          </div>

          <div className='py-4 text-center bg-powercut_yellow'>
            <h1 className='p-1 text-5xl font-avenir font-bold'>Our mission</h1>
            <p className='px-6 2xl:px-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae tortor condimentum. Et malesuada fames ac turpis egestas sed tempus. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Facilisis sed odio morbi quis commodo odio. Consectetur adipiscing elit ut aliquam purus sit amet luctus. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Pulvinar elementum integer enim neque. Habitant morbi tristique senectus et netus et malesuada fames ac. Donec massa sapien faucibus et molestie ac feugiat sed lectus. Faucibus pulvinar elementum integer enim.</p>
          </div>

        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
