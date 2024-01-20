// icons
import { HiHome, HiUser, HiViewColumns, HiEnvelope } from 'react-icons/hi2';

import { RiArticleFill } from 'react-icons/ri';
import React, { useState } from 'react';
import { ThreeCircles } from 'react-loader-spinner';

import { fadeIn } from '../variants';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'resume',
    path: '/HugoArriojasResume.pdf',
    icon: <RiArticleFill />,
  },
  {
    name: 'contact',
    path: 'mailto:hugo.arriojas@hotmail.com?subject=Hello Hugo',
    icon: <HiEnvelope />,
  },
];

// next link
import Link from 'next/link';
// next router
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const currentPathname = router.pathname;
  const [directedPathname, setPathname] = useState(currentPathname);

  return (
    <nav className="fixed bottom-0 top-0 z-50 mt-auto flex h-max w-full flex-col items-center gap-y-4 xl:right-[2%] xl:h-screen xl:w-16 xl:max-w-md xl:justify-center">
      <div className="flex h-[80px] w-full items-center justify-between gap-y-10 bg-white/10 px-4 py-8 text-3xl backdrop-blur-sm md:px-40 xl:h-max xl:flex-col xl:justify-center xl:rounded-full xl:px-0 xl:text-xl">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === currentPathname && 'text-accent'
              } group relative flex items-center transition-all duration-300 hover:text-accent`}
              href={link.path}
              key={index}
              onClick={() => setPathname(link.path)}
            >
              {/* tooltip */}
              <div className="absolute right-0 hidden pr-14 xl:group-hover:flex">
                <div className="relative flex items-center rounded-[3px] bg-white p-[6px] text-primary">
                  <div className="text-[12px] font-semibold capitalize leading-none">
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div className="absolute -right-2 border-y-[6px] border-l-8 border-r-0 border-solid border-y-transparent border-l-white"></div>
                </div>
              </div>
              {/* icon */}
              <div>
                {directedPathname === link.path &&
                currentPathname !== link.path ? (
                  <ThreeCircles
                    height="20"
                    width="20"
                    color="#fe6192"
                    ariaLabel="loading-icon"
                    wrapperClass=""
                    variants={fadeIn('down', 1)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                  />
                ) : (
                  link.icon
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
