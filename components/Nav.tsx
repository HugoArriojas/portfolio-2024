'use client';

// icons
import { HiHome, HiUser, HiViewColumns, HiEnvelope } from 'react-icons/hi2';

import { RiArticleFill } from 'react-icons/ri';
import React, { useState } from 'react';
// import { ThreeCircles } from 'react-loader-spinner';

import { fadeIn } from '../variants';

// Define the type for nav items
interface NavItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

// nav data
export const navData: NavItem[] = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'resume',
    path: '/hugo-assets/HugoArriojasResume.pdf',
    icon: <RiArticleFill />,
  },
  {
    name: 'contact',
    path: 'mailto:hugo.arriojas@outlook.com?subject=Hello Hugo',
    icon: <HiEnvelope />,
  },
];

// next link
import Link from 'next/link';
// next navigation
import { usePathname } from 'next/navigation';

const Nav: React.FC = () => {
  const pathname = usePathname();
  const [directedPathname, setPathname] = useState<string>(pathname || '/');

  return (
    <nav className='fixed bottom-0 top-0 z-50 mt-auto flex h-max w-full flex-col items-center gap-y-4 xl:right-[2%] xl:h-screen xl:w-16 xl:max-w-md xl:justify-center'>
      <div className='flex h-[80px] w-full items-center justify-between gap-y-10 bg-white/10 px-4 py-8 text-3xl backdrop-blur-sm md:px-40 xl:h-max xl:flex-col xl:justify-center xl:rounded-full xl:px-0 xl:text-xl'>
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && 'text-accent'
              } group relative flex items-center transition-all duration-300 hover:text-accent`}
              href={link.path}
              key={index}
              onClick={() => setPathname(link.path)}
            >
              {/* tooltip */}
              <div className='absolute right-0 hidden pr-14 xl:group-hover:flex'>
                <div className='relative flex items-center rounded-[3px] bg-white p-[6px] text-primary'>
                  <div className='text-[12px] font-semibold capitalize leading-none'>
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div className='absolute -right-2 border-y-[6px] border-l-8 border-r-0 border-solid border-y-transparent border-l-white'></div>
                </div>
              </div>
              {/* icon */}
              <div>
                {directedPathname === link.path &&
                pathname &&
                !pathname.includes(link.path)
                  ? link.icon
                  : link.icon}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
